<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <v-row>
        <v-col cols="12">
          <v-btn
            block
            variant="outlined"
            @click="sendBuyItem"
          >
            選択した商品を購入
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <ItemCard :items="items" />
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import sendmsg from '../backend/sendmsg';

interface Item {
	/* eslint @typescript-eslint/no-explicit-any: off */
	[prop: string]: any;
}
const items: Item[] = reactive([
  { no: 1, name: 'a', description: 'あ', price: 1000 },
  { no: 2, name: 'b', description: 'い', price: 2000 },
  { no: 3, name: 'c', description: 'あ', price: 3000 },
  { no: 4, name: 'd', description: 'い', price: 4000 },
  { no: 5, name: 'e', description: 'あ', price: 1000 },
  { no: 6, name: 'f', description: 'い', price: 2000 },
  { no: 7, name: 'g', description: 'あ', price: 3000 },
  { no: 8, name: 'h', description: 'あ', price: 4000 },
  { no: 9, name: 'i', description: 'あ', price: 1000 }
]);
for (let n in items) {
  // 商品情報配列に、購入選択フラグを追加
  items[n].selected = false;
}
function sendBuyItem() {
  console.log(items);
  sendmsg();
}

</script>
