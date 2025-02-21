import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Contact from './components/Contact.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Projects from './components/Projects.vue'
import emailjs from '@emailjs/browser';
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
emailjs.init("soSYuH38UNIoq-eqZ");
import { Observer } from 'tailwindcss-intersect';
 
Observer.start();

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/services', component: Services },
        { path: '/contact', component: Contact },
        { path: '/projects', component: Projects }
    ]
});



createApp(App)
  .use(router)
  .mount('#app');
