<template>
  <div>
    <p v-if="message">
      {{ message }}
    </p>
  </div>
</template>

<script lang="ts">
import liff from '@line/liff';

export default {
  name: 'App',
  data () {
    return {
      message: '',
      accessToken: ''
    };
  },
  mounted () {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID
      })
      .then(() => {
        this.accessToken = liff.getAccessToken();
        if (this.accessToken == null) {
          this.message = 'LINEアプリから実行してください';
          return false;
        }
        this.message = 'ログイン成功';
      })
      .catch((e) => {
        this.message = 'ログイン失敗';
        this.error = `${e}`;
      });
  },
  methods: {
    sendUser2AdminMessage() {
      liff.sendMessage([{
        type: 'text',
        text: 'UserからMessage送信したしん!',
      }]);
    },
    async sendAdmin2UserMessage() {
      const apiClient = axios.create({
        baseURL: 'https://hogehogehoge',
        headers: {
          'Content-type': 'application/json',
        },
      });
      await apliClient.post('/api/backend/sendMessage', {
        accessToken: this.accessToken,
      });
    }
  }
};
</script>
