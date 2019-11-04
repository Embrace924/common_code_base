import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL, // 部署在服务器子路径上时需要
    routes: [
        {
            path: '/',
            name: 'defaultLayout',
            component: () => import('./components/layout/Default.vue'),
            redirect: { name: 'HelloWorld' },
            children: [
                {
                    path: '/hello-world',
                    name: 'HelloWorld',
                    component: () => import('./views/HelloWorld.vue')
                }
            ]
        },
        {
            path: '/404',
            name: '404',
            component: () => import('./views/404.vue')
        },
        {
            path: '*',
            name: 'all',
            redirect: '/404'
        }
    ]
});
