import Vue from "vue";
import VueRouter from "vue-router";
import index from "@/views/index/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    title:'首页',
    component: index
  },
  {
    path: "/goods",
    name: "goods",
    title:'商品',
    component: index
  },
  {
    path: "/shop",
    name: "shop",
    title:'购物车',
    component: index
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import("../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
