import { createApp } from 'vue';
import App from '@/App.vue';
import UI from '@/components/UI';

const app = createApp(App)

UI.forEach(UIComponent => {
  app.component(UIComponent.name, UIComponent);
});


app.mount('#app');
