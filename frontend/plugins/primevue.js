
import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Card from 'primevue/card';
import Menu from 'primevue/menu';
import Divider from 'primevue/divider';


import 'primevue/resources/themes/lara-light-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                       //core css
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true, unstyled: false });
    nuxtApp.vueApp.component("Button", Button);
    nuxtApp.vueApp.component("Card", Card);
    nuxtApp.vueApp.component("Menu", Menu);
    nuxtApp.vueApp.component("Divider", Divider);
    //other components that you need
});