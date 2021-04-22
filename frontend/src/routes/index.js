import Vue from 'vue';
import VueRouter from 'vue-router';
import NavBar from "@/components/NavBar";
import HelloWorld from '../components/HelloWorld.vue'

// const Foo = {template: '<div>foo</div>'};
// const Bar = {template: '<div>bar</div>'};

Vue.use(VueRouter);
const routes = [
    { path: '/navbar', component: NavBar },
    { path: '/', component: HelloWorld },

];

const router = new VueRouter({
    mode:"history",base:process.env.BASE_URL,
    routes // short for `routes: routes`
});

export default router;