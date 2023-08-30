<template>
  <span
    v-for="(item1,idx1) in staffs"
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
      {{ item1.label }}
      <el-badge
        v-if="item1.badge >= 1"
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
      {{ item1.label }}
    </el-tag>
  </span>
  &nbsp;
</template>

<script lang="ts">
import { ElTag,ElBadge } from 'element-plus';

export default {
  name: 'Scrn1p3',
  components: {
    ElTag,
    ElBadge
  },
  props: [
    'wtype',
    'stst'
  ],
  data () {
    return {
      staffs: []
    };
  },
  created () {
    let idx = 0;
    for (let cnt1 = 0; cnt1 < this.stst.length; cnt1++, idx++) {
      this.staffs.push([]);
      this.staffs[idx].push({
        label: '', value: '',type: '', effect: '', badge: 0
      });
      //
      if (this.wtype === 'ja') {
        this.staffs[idx].label = this.stst[cnt1].ja;
      } else if (this.wtype === 'en') {
        this.staffs[idx].label = this.stst[cnt1].en;
      }
      this.staffs[idx].value = this.stst[cnt1].id;
      this.staffs[idx].type = 'warning';
      this.staffs[idx].effect = 'light';
      this.staffs[idx].badge = 3;
    }
  },
  methods: {
    onClick(evt,idx) {
      if (this.staffs[idx].effect == 'light'){
        for (var n = 0,cnt = 0; this.staffs.length > n; n++) {
          if ('dark' == this.staffs[n].effect) {
            cnt += 1;
          }
          if (cnt >= 1) {
            this.staffs[n].effect = 'light';
          }
        }
        this.staffs[idx].effect = 'dark';
      } else {
        this.staffs[idx].effect = 'light';
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
