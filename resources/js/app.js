// VUE
import { createApp } from 'vue';
import MainVue from './MainVue.vue';
const vueApp = createApp({});
// registers our components globally
vueApp.component('main-vue', MainVue);
// mount the app to the DOM
vueApp.mount('#mainAppVue');

// vanilla JS
require('./bootstrap');

$(document).ready(function() {
    // console.log($);
    // alert('done by jquery ready');
});
