<template>
  <div class="home">
    <div class="main">
      <p>这里是文字1</p>
      <p>这里是文字2</p>
      <p>这里是文字3</p>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
// @ is an alias to /src

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
.mask{
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.4);
  border-left:0px;
  border-right: 100px;
}
</style>
