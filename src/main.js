import { createApp } from 'vue'
import App from './App.vue'
import MyComponent from './components/MyComponent.vue';
import ComputedComponent from './components/ComputedComponent.vue';
import EventHandler from './components/EventHandler.vue';

const app = createApp(App);

app.component('MyComponent', MyComponent);
app.component('ComputedComponent', ComputedComponent);
app.component('EventHandler', EventHandler);

app.mount('#app')
