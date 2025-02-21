/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */
import { createVuetify } from 'vuetify';
// Styles
import 'vuetify/styles';
import '@fortawesome/fontawesome-free/css/all.css';
// Composables
import { library } from '@fortawesome/fontawesome-svg-core';
import { aliases, fa } from 'vuetify/iconsets/fa';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far); // Include needed regular icons

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark'
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa
    }
  }
});
