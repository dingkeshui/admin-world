/**
 * 
 * 路由文件
 * meta参数
 * token true 需要登录
 * password true  需要二次验证
 * unshow true  隐藏 不显示在导航栏
 * unleft true 掩藏左侧导航栏
 * untop true 隐藏头部导航栏
 * 
 */

import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import index from "@/views/index/index.vue";
import content from "@/components/layout/page-content.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "index",
  //   title:'首页',
  //   component: index,
  // },
  {
    path: "/",
    name: "resume",
    title:'简历',
    component: () => import("@/views/resume/index.vue"),
    meta:{
      untop:true
    }
  },
  {
    path: "/login",
    name: "login",
    title:'登陆',
    component: () => import("@/views/user/login.vue"),
    meta:{
      unshow:true,
      unleft:true,
      untop:true
    }
  },
  {
    path: "/note",
    name: "note",
    redirect: "/note/index",
    component: content,
    title:'笔记',
    children:[
      {
        path: "/note/index",
        name: "note-index",
        title:'笔记列表',
        meta:{
          token:true
        },
        component: () => import("@/views/note/index.vue")
      }
    ]
  },
  {
    path: "/algorithm",
    name: "algorithm",
    redirect: "/algorithm/index",
    component: content,
    title:'算法',
    children:[
      {
        path: "/algorithm/index",
        name: "algorith-index",
        title:'前端算法',
        meta:{
          token:true
        },
        component: () => import("@/views/algorithm/index.vue")
      },
      {
        path: "/algorithm/some",
        name: "algorith-some",
        title:'其他算法',
        meta:{
          token:true
        },
        component: () => import("@/views/algorithm/some.vue")
      }
    ]
  },
  {
    path: "/account-password",
    name: "account-password",
    title:'账号/密码',
    meta:{
      token:true
    },
    component: () => import("@/views/account-password/index.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

// 路由拦截
router.beforeEach((to,from,next)=>{
  let userInfoStorage = JSON.parse(sessionStorage.getItem('userInfo'))
  if(to.meta&&to.meta.token&&(!userInfoStorage||!userInfoStorage.token)){
    next({
      path:'/login',
      query:{
        to:to.path
      }
    })
  } else {
    next()
  }
})

export default router;
