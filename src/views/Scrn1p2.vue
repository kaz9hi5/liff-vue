<template>
  <span
    v-for="(item1,idx1) in times"
    :key="idx1"
  >
    <el-tag
      v-if="item1.badge >= 1"
      class="mx-1"
      :type="item1.type"
      :effect="item1.effect"
      round
      @click="onClick($event,idx1)"
    >
      {{ item1.value }}時
      <el-badge
        :value="item1.badge"
        class="item"
      />
    </el-tag>
    <el-tag
      v-else
      class="mx-1"
      type="info"
      effect="light"
      round
    >
      {{ item1.value }}時
    </el-tag>
    &nbsp;
  </span>
</template>

<script lang="ts">
import { ElTag,ElBadge } from 'element-plus';

export default {
  name: 'Scrn1p2',
  components: {
    ElTag,
    ElBadge
  },
  props: [
    'tmtm',
    'openHour',
    'closeHour'
  ],
  data () {
    return {
      times: []
    };
  },
  created () {
    /**
     * CheckBox Tag.
     */
    for (let hour = this.openHour, idx1 = 0, idx2 = 0; hour <= this.closeHour;
      hour++, idx1++) {
      this.times.push({ label: '', value: '', type: '', effect: '', badge: 0 });
      //
      this.times[idx1].label = hour;
      this.times[idx1].value = hour;
      if (idx2 < this.tmtm.length && this.tmtm[idx2].hour === hour) {
        this.times[idx1].badge = this.tmtm[idx2].badge;
        this.times[idx1].type = 'success';
        idx2++;
      } else {
        this.times[idx1].badge = 0;
        this.times[idx1].type = 'info';
      }
      this.times[idx1].effect = 'light';
    }
  },
  methods: {
    onClick(evt,idx) {
      if ('light' == this.times[idx].effect) {
        for (var n = 0,cnt = 0; this.times.length > n; n++) {
          if ('dark' == this.times[n].effect) {
            cnt += 1;
          }
          if (cnt >= 2) {
            this.times[n].effect = 'light';
          }
        }
        this.times[idx].effect = 'dark';
      } else {
        this.times[idx].effect = 'light';
      }
    }
  }
};
</script>

<style scoped>
  :deep(.el-badge) {
    --el-badge-font-size: 8px;
    --el-badge-radius: 6px;
    z-index: 2;
  }
  :deep(.el-badge__content) {
    color: black;
    height: 14px;
  }
  :deep(.el-badge__content--danger) {
    background-color: #e2dbff;
  }
</style>
