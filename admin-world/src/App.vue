<template>
  <div id="app">
    <Layout>
      <Sider v-show="!$route.meta.unleft" hide-trigger :class="[{hidden:menuType}]">
        <left-menu />
      </Sider>
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
  },
  methods:{
    ...mapMutations('user',[
        'USER_CHANGE'
    ])
  }
}
</script>

<style lang="scss" scope>
#app{
  height: 100vh;
  overflow: hidden;
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
}
</style>
