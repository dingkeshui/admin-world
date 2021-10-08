<template>
  <div class="home">
    <div class="main">
      本站由 腾讯云/CentOS/Apache/Vue/Webpack/iView 提供技术支持
    </div>
  </div>
</template>

<script>

export default {
  name: "index",
  data(){
   return {
     value:''
   } 
  },
  components: {
  }
};
</script>

<style lang="scss" scoped>
.home{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #2b85e4;
}
</style>
