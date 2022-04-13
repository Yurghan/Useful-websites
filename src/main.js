import { createApp } from 'vue';
import App from './App.vue';

import MainContainer from './components/MainContainer.vue';

const app = createApp(App);

app.component('main-container', MainContainer);

app.mount('#app');
