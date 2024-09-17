import { createApp } from 'vue'
import App from './App.vue'
import MyComponent from './components/MyComponent.vue';
import ComputedComponent from './components/ComputedComponent.vue';
import EventHandler from './components/EventHandler.vue';
import FormInput from './components/FormInput.vue';
import WatchComponent from './components/WatchComponent.vue';
import FetchComponent from './components/FetchComponent.vue';
import router from './router';

const app = createApp(App);

app.component('MyComponent', MyComponent);
app.component('ComputedComponent', ComputedComponent);
app.component('EventHandler', EventHandler);
app.component('FormInput', FormInput);
app.component('WatchComponent', WatchComponent);
app.component('FetchComponent', FetchComponent);

app.use(router)

app.mount('#app')
