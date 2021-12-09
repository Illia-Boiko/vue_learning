import { createApp } from 'vue';
import App from './App.vue';
import UI from '@/components/UI';
import router from '@/router/router';
import store from '@/store';

const app = createApp(App);

UI.forEach(item => {
  app.component(item.name, item);
})

app
  .use(router)
  .use(store)
  .mount('#app')
