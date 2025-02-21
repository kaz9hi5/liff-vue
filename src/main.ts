/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
// Composables
import { createApp } from 'vue';
import App from './App.vue';

// Plugins
import { registerPlugins } from './plugins/index';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon); // Register component globally
registerPlugins(app);

app.mount('#app');
