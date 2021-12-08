import { createApp } from 'vue';
import App from './App.vue';
import UI from '@/components/UI';

const app = createApp(App);

UI.forEach(item => {
  app.component(item.name, item);
})

app.mount('#app')
