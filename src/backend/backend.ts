import axios, { AxiosError, AxiosResponse } from 'axios';
import logger from './logger';

export interface LINE_UINFO {
  'iss': string,
  'sub': string,
  'aud': string,
  'exp': number,
  'iat': number,
  'nonce': string,
  'amr': Array<string>,
  'name': string,
  'picture': string,
  'email': string
};
export interface POST_RESP {
  'sentMessages': [{
    'id': string,
    'quoteToken': string
  }]
};

/**
 * IDトークンを送信してユーザー情報を取得
 * @param id_token IDトークン#liff.getIDToken
 * @param chanel_id LINEプラットフォームが発行した、チャネルID
 */
const getLineUserInfo = async (id_token: string, chanel_id: string): Promise<LINE_UINFO | undefined> => {
  const _axios = axios.create({
    baseURL: 'https://api.line.me',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
    timeout: 5000,
    responseType: 'json', 
    transitional: {
      silentJSONParsing: false
    }
  });
  // IDトークンのペイロード部分(JSON Web Token)を返却
  await _axios
    .post('oauth2/v2.1/verify', {
      id_token: id_token,
      client_id: chanel_id
    })
    .then(function (_res: AxiosResponse<LINE_UINFO>) {
      logger.info('idToken:'+_res.data);
      return _res.data;
    })
    .catch(function (_err: AxiosError<{error: string}>) {
      logger.error(_err.message);
    });
  return undefined;
};
/**
 * 管理者からユーザーへ引用メッセージ送信
 * @param to 送信するユーザID/Webhookイベントから取得した応答するreplyToken
 * @param msgs 送信するメッセージ(呼び元はJSON.stingray利用)
 */
const postLineMsg = async (to: string,msgs: string): Promise<POST_RESP | undefined> => {
  const _axios = axios.create({
    baseURL: 'https://api.line.me',
    headers: {
      'Content-type': 'application/json',
      Authorization:
        'Bearer ' + import.meta.env.VITE_CHANEL_SECRET_ID,
    },
    timeout: 5000,
    responseType: 'json', 
    transitional: {
      silentJSONParsing: false
    }
  });
  const url: string = 'v2/bot/message/push';
  const postBody: string = JSON.stringify({
    to: to,
    messages: msgs
  });
  await _axios
    .post(url, postBody)
    .then(function (_res: AxiosResponse<POST_RESP>) {
      logger.info('idToken:'+_res.data);
      return _res.data;
    })
    .catch(function (_err: AxiosError<{error: string}>) {
      logger.error(_err.message);
    });
  return undefined;
};
export default { getLineUserInfo, postLineMsg };
