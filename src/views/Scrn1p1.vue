<template>
  <span
    v-for="(item1,idx1) in days"
    :key="idx1"
  >
    <span
      v-for="(item2,idx2) in item1"
      :key="idx2"
    >
      <el-tag
        v-if="item2.badge >= 1"
        class="mx-1"
        :type="item2.type"
        :effect="item2.effect"
        round
        @click="onClick($event,idx1,idx2)"
      >
        {{ item2.label.substring(8) }}日
        <el-badge
          :value="item2.badge"
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
        {{ item2.label.substring(8) }}日
      </el-tag>
    </span>
  </span>
</template>

<script lang="ts">
import { ElTag,ElBadge } from 'element-plus';

export default {
  name: 'Scrn1p1',
  components: {
    ElTag,
    ElBadge
  },
  props: [
    'wtype',
    'weekStart',
    'dydy'
  ],
  data () {
    return {
      days: []
    };
  },
  created () {
    const weekLabel = {
      ja: [
        { label: '日', color: 'danger' }, { label: '月', color: 'success' },
        { label: '火', color: 'success' }, { label: '水', color: 'success' },
        { label: '木', color: 'success' }, { label: '金', color: 'success' },
        { label: '土', color: 'waring' }],
      en: [
        { label: 'Sun', color: 'danger' }, { label: 'Mon', color: 'success' },
        { label: 'Tue', color: 'success' }, { label: 'Wed', color: 'success' },
        { label: 'Thu', color: 'success' }, { label: 'Fri', color: 'success' },
        { label: 'Sat', color: 'warning' }]
    };
    /**
     * CheckBox Tag.
     */
    let idx = 0;
    for (let cnt1 = 0; cnt1 < this.dydy.length; cnt1++, idx = 0) {
      this.days.push([]);
      for (let cnt2 = this.weekStart; cnt2 < 7; cnt2++, idx++) {
        this.days[cnt1].push({
          label: '', value: '', label2: '', type: '', effect: '',
          badge: 0
        });
        //
        this.days[cnt1][idx].label = this.dydy[cnt1][cnt2].day;
        this.days[cnt1][idx].value = this.dydy[cnt1][cnt2].day;
        if (this.wtype === 'ja') {
          this.days[cnt1][idx].label2 = weekLabel.ja[cnt2].label;
          this.days[cnt1][idx].type = weekLabel.ja[cnt2].color;
        }
        if (this.wtype === 'en') {
          this.days[cnt1][idx].label2 = weekLabel.en[cnt2].label;
          this.days[cnt1][idx].type = weekLabel.en[cnt2].color;
        }
        this.days[cnt1][idx].effect = 'light';
        this.days[cnt1][idx].badge = 1;
      }
      for (let cnt2 = 0; cnt2 < this.weekStart; cnt2++, idx++) {
        this.days[cnt1].push({
          label: '', value: '', label2: '', type: '', effect: '',
          badge: 0
        });
        //
        this.days[cnt1][idx].label = this.dydy[cnt1][cnt2].day;
        this.days[cnt1][idx].value = this.dydy[cnt1][cnt2].day;
        if (this.wtype === 'ja') {
          this.days[cnt1][idx].label2 = weekLabel.ja[cnt2].label;
          this.days[cnt1][idx].type = weekLabel.ja[cnt2].color;
        }
        if (this.wtype === 'en') {
          this.days[cnt1][idx].label2 = weekLabel.en[cnt2].label;
          this.days[cnt1][idx].type = weekLabel.en[cnt2].color;
        }
        this.days[cnt1][idx].effect = 'light';
        this.days[cnt1][idx].badge = 1;
      }
    }
  },
  methods: {
    onClick(evt,idx1,idx2) {
      if (this.days[idx1][idx2].effect == 'light') {
        for (var n1 = 0,cnt = 0; this.days.length > n1; n1++) {
          for (var n2 = 0; this.days[n1].length > n2; n2++) {
            if ('dark' == this.days[n1][n2].effect) {
              cnt += 1;
            }
            if (cnt >= 2) {
              this.days[n1][n2].effect = 'light';
            }
          }
        }
        this.days[idx1][idx2].effect = 'dark';
      } else {
        this.days[idx1][idx2].effect = 'light';
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
