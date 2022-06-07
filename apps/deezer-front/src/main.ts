import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

const routes = [
	{ path: '/', component: () => import('./pages/PlayListView.vue') },
	{ path: '/playlist/:id', component: () => import('./pages/PlayList.vue') },
];
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL), //import.meta.url
	routes,
});

const app = createApp(App);
app.use(router);

app.mount('#app');
