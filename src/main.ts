import { createApp } from 'vue'
import App from './App.vue'

import { stateStore } from "./store/stateStore"

const app = createApp(App);
app.mount('#app');
app.use(stateStore);