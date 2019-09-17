/*!

 =========================================================
 * Vue Paper Dashboard - v2.0.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/paper-dashboard
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import App from "./App";
import router from "./router/index";

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

import axios from 'axios';
Vue.prototype.$http = axios;

import Vue2Editor from "vue2-editor";
Vue.use(Vue2Editor);

import { EmojiPickerPlugin } from 'vue-emoji-picker';
Vue.use(EmojiPickerPlugin);

import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

Vue.use(PaperDashboard);

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");