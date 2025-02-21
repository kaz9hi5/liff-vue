<template>
  <v-col
    v-for="(itm, n) in items"
    :key="n"
    class="d-flex child-flex justify-center"
    cols="4"
    sm="3"
    md="3"
    lg="3"
    xl="3"
  >
    <v-card class="w-60 h-70">
      <v-img
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        :src="`https://picsum.photos/500/300?image=${n * 6 + 8}`"
        aspect-ratio="1"
        class="bg-grey-lighten-2"
        cover
      >
        <v-row
          align="center"
          class="fill-height ma-0"
          justify="center"
        >
          <v-fade-transition mode="out-in">
            <v-btn
              :key="`info-${itm.selected}`"
              :prepend-icon="
                itm.selected ? 'fa:far fa-circle-check' : ''
              "
              :text="itm.selected ? 'カゴから戻す' : 'カゴに入れる'"
              variant="text"
              @click="onBuyBtnClick(n)"
            />
          </v-fade-transition>
        </v-row>
        <template #placeholder>
          <v-row
            align="center"
            class="fill-height ma-0"
            justify="center"
          >
            <v-progress-circular
              color="grey-lighten-5"
              indeterminate
            />
          </v-row>
        </template>
      </v-img>
      <v-card-title>{{ itm.no }}.&nbsp;{{ itm.name }}</v-card-title>
      <v-card-subtitle>¥{{ itm.price }}</v-card-subtitle>
      <v-card-text>{{ itm.description }}</v-card-text>
    </v-card>
  </v-col>
</template>

<script setup lang="ts">
interface item {
	no: number;
	name: string;
	description: string;
	price: number;
	selected: boolean;
}
const props = defineProps({
  items: {
    type: Array as () => item[],
    required: true
  }
});
//interface Emits {};
//const emit = defineEmits<Emits>();

const onBuyBtnClick = (
  no?: /// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
	number
): void => {
  if (undefined == no) {
    return;
  }
  props.items[no].selected = !props.items[no].selected;
};
</script>
