import liff from '@line/liff';
import bk, { LINE_UINFO } from './backend';

export default (() => {
  liff
    .init({
      liffId: import.meta.env.VITE_LIFF_ID
    })
    .then(() => {
      const accessToken: string | null = liff.getAccessToken();
      if (!liff.isInClient() || accessToken == null) {
        console.log('LINEアプリから実行してください');
        return;
      }
      liff.sendMessages([{
        type: 'text',
        text: 'ユーザーからメッセージ送信した'
      }]);
      console.log('送りました');
    });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function replytMessage(idToken: string | null,msgs: string) {
  if (!liff.isLoggedIn() || idToken == null) {
    return;
  }
  // ユーザID
  let userId: string = '';
  // IDトークンを送信してユーザー情報を取得
  bk.getLineUserInfo(
    idToken,
    import.meta.env.VITE_CHANEL_ID
  ).then((_res: LINE_UINFO | undefined) => {
    if (_res != undefined && null != _res.sub) {
      userId = _res.sub;
    }
  });
  // 管理者からユーザーへメッセージ送信
  bk.postLineMsg(userId,msgs);
};
