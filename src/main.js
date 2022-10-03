import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import "./styles/index.scss";

import * as Icons from '@element-plus/icons-vue';

import App from './App.vue'
import router from './router';

const app = createApp(App);

app.use(ElementPlus);
app.use(router);

for (let i in Icons) {
    app.component(i, Icons[i])
}

app.mount('#app');