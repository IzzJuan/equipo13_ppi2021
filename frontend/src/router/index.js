import VueRouter from "vue-router";
import Vue from "vue";
import TestingComponent from "@/components/TestingComponent";

Vue.use(VueRouter);
const routes = [
    { path: '/', component: TestingComponent},
]

const router = new VueRouter({
    mode:"history",
    routes
});

export default router;