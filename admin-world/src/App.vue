<template>
  <div id="app" :class="[{mobile:navigator&&navigator.mobile}]">
    <Layout>
      <Sider v-if="!(navigator&&navigator.mobile)" v-show="!$route.meta.unleft" hide-trigger :class="[{hidden:menuType}]">
        <left-menu />
      </Sider>
      <div v-else :class="['mobile-menu-box',{hidden:menuType}]" @click="LAYOUT_CHANGE">
        <div class="mobile-menu" @click.stop=""><left-menu /></div>
        <div class="icon-box" @click.stop="LAYOUT_CHANGE"><Icon type="ios-apps-outline" /></div>
      </div>
      <Layout>
        <Header v-show="!$route.meta.untop">
          <top-header />
        </Header>
        <Content>
          <keep-alive v-if="$route.meta.keep">
            <router-view></router-view>
          </keep-alive>
          <router-view v-else></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import leftMenu from "@/components/layout/left-menu.vue"
import topHeader from "@/components/layout/top-header.vue"

import { mapGetters,mapMutations } from 'vuex'

export default {
  name:"app",
  components:{
    leftMenu,
    topHeader
  },
  computed:{
    ...mapGetters('layout',[
      'menuType'
    ]),
    ...mapGetters('app',[
      'navigator'
    ])
  },
  data() {
    return {

    }
  },
  created(){
    let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    if(userInfo){
      this.USER_CHANGE(userInfo)
    }
    this.APP_NAVIGATOR_CHANGE(this.getNavigatorInfo())
    if(this.navigator&&this.navigator.mobile){
      this.LAYOUT_CHANGE(false)
    }
  },
  mounted(){
    document.getElementById('app').style.display = 'block';
    document.getElementById('app-loading').style.display = 'none';

    var performance = window.performance;
    console.log('performance',performance)
  },
  methods:{
    getNavigatorInfo(){
      var u = navigator.userAgent;
      return {
        trident: u.indexOf('Trident') > -1, //IE内核 
        presto: u.indexOf('Presto') > -1, //opera内核 
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核 
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核 
        mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/) && u.indexOf('QIHU') && u.indexOf('QIHU') > -1 && u.indexOf('Chrome') < 0, //是否为移动终端 
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器 
        iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad 
        webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部  
      }
    },
    ...mapMutations('user',[
        'USER_CHANGE'
    ]),
    ...mapMutations('app',[
        'APP_NAVIGATOR_CHANGE'
    ]),
    ...mapMutations('layout',[
        'LAYOUT_CHANGE'
    ])
  }
}
</script>

<style lang="scss" scope>
#app{
  height: 100vh;
  overflow: hidden;
  &.mobile{
    min-height: 100vh;
    height: initial;
  }
  .mobile-menu-box{
    z-index: 100;
    transition: all 0.3s;
    &.hidden{
      transform: translateX(-100%);
    }
    .icon-box{
      position: absolute;
      top: 0px;
      right: 0px;
      width: 50px;
      height: 30px;
      background-color: #354258;
      transform: translateX(100%);
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      box-sizing: border-box;
      padding-left: 5px;
      i{
        font-size: 30px;
        color: #fff;
      }
    }
  }
  .ivu-layout {
    height: 100%;
    background-color: #fff;
    .ivu-layout-sider{
      &.hidden{
        margin-left: -200px;
      }
    }
    .ivu-layout-header{
      background-color: #fff;
      box-shadow: 0px -2px 8px 0px #DEDEDE;
    }
  }
  .mobile-menu-box{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: rgba($color: #000000, $alpha: 0.3);
    .mobile-menu{
      width: 200px;
      height: 100vh;
    }
  }
}
</style>
