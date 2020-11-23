<template>
  <div id="app">
    <Layout>
      <Sider hide-trigger>
        <left-menu />
      </Sider>
      <Content>
        <keep-alive v-if="$route.meta.keep">
          <router-view></router-view>
        </keep-alive>
        <router-view v-else></router-view>
      </Content>
    </Layout>
  </div>
</template>

<script>
import leftMenu from "@/components/layout/left-menu.vue"

export default {
  name:"app",
  components:{
    leftMenu
  },
  data() {
    return {

    }
  },
  mounted(){
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
  }
}
</style>
