import 'element-plus/theme-chalk/dark/css-vars.css';
import 'element-plus/dist/index.css';
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import Scrn from './views/Scrn.vue';

createApp(Scrn).use(ElementPlus).mount('#scrn');
