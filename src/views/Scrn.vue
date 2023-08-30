<template>
  <p>バッヂの数字は当店予約可能期間の空き枠の数です。1.〜3.何れかの空き枠の予約方法を選択して下さい</p>
  <el-form ref="formRef">
    <el-divider content-position="left">
      1.
      <el-icon
        :size="14"
        color="red"
      >
        <Calendar />
      </el-icon>
      日付
    </el-divider>
    <Scrn1p1
      :week-start="weekStart"
      :wtype="wtype"
      :dydy="dydy"
    />
    <div class="d-grid">
      <el-button
        :icon="EditPen"
        round
        @click="onSubmit('formRef')"
      >
        選択した日付の空き枠を予約
      </el-button>
    </div>
  </el-form>

  <el-form ref="formRef">
    <el-divider content-position="left">
      2.
      <el-icon
        :size="14"
        color="red"
      >
        <Clock />
      </el-icon>
      時間
    </el-divider>
    <Scrn1p2
      :open-hour="openHour"
      :close-hour="closeHour"
      :tmtm="tmtm"
    />
    <div class="d-grid">
      <el-button
        :icon="EditPen"
        round
        @click="onSubmit('formRef')"
      >
        選択した時間の空き枠を予約
      </el-button>
    </div>
  </el-form>

  <el-form ref="formRef">
    <el-divider content-position="left">
      3.
      <el-icon
        :size="14"
        color="red"
      >
        <Avatar />
      </el-icon>
      Staff
    </el-divider>
    <Scrn1p3
      :stst="stst"
      :wtype="wtype"
    />
    <div class="d-grid">
      <el-button
        :icon="EditPen"
        round
        @click="onSubmit('formRef')"
      >
        選択したStaffの空き枠を予約
      </el-button>
    </div>
  </el-form>
  <App />
</template>

<script lang="ts" setup>
import { EditPen,Avatar,Clock,Calendar } from '@element-plus/icons-vue';
const onSubmit = (formEl) => {
  if (!formEl) return;
  formEl.validateField([], valid => {
    if (valid) {
      console.log('submit!');
    }
  });
};
</script>

<script lang="ts">
import { ElForm,ElDivider,ElIcon,ElButton } from 'element-plus';
import Scrn1p1 from './Scrn1p1.vue';
import Scrn1p2 from './Scrn1p2.vue';
import Scrn1p3 from './Scrn1p3.vue';
import App from '../components/App.vue';

export default {
  name: 'Scrn',
  components: {
    Scrn1p1,
    Scrn1p2,
    Scrn1p3,
    App,
    ElForm,
    ElDivider,
    ElIcon,
    ElButton
  },
  data () {
    return {
      dydy: [
        [
          { day: '2023/10/01', w: 0 },
          { day: '2023/10/02', w: 1 },
          { day: '2023/10/03', w: 2 },
          { day: '2023/10/04', w: 3 },
          { day: '2023/10/05', w: 4 },
          { day: '2023/10/06', w: 5 },
          { day: '2023/10/07', w: 6 }
        ],
        [
          { day: '2023/10/08', w: 0 },
          { day: '2023/10/09', w: 1 },
          { day: '2023/10/10', w: 2 },
          { day: '2023/10/11', w: 3 },
          { day: '2023/10/12', w: 4 },
          { day: '2023/10/13', w: 5 },
          { day: '2023/10/14', w: 6 }
        ]
      ],
      weekStart: 2,
      tmtm: [
        { hour: 10, badge: 2 },
        { hour: 15, badge: 2 },
        { hour: 17, badge: 1 }
      ],
      openHour: 10,
      closeHour: 18,
      stst: [
        { id: 'S001', ja: '吉川', en: 'Yoshikawa' },
        { id: 'S002', ja: '比護', en: 'Higo' },
        { id: 'S003', ja: '砂糖', en: 'Sugar' }
      ],
      wtype: 'ja'
    };
  }
};
</script>

<style scoped>
  .el-form {
    margin-bottom: 18px;
  }
  .el-button {
    margin-top: 8px;
    width: 100%;
  }
</style>
