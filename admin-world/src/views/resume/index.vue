<template>
  <div class="home">
    <div class="main">
        <div class="item">
            <div class="item-title"><span>个人信息</span></div>
            <div class="item-list">
                <div class="info"><div class="title">姓名:</div><div class="text">丁明辉</div></div>
                <div class="info"><div class="title">性别:</div><div class="text">男</div></div>
            </div>
            <div class="item-list">
                <div class="info"><div class="title">年龄:</div><div class="text">25</div></div>
                <div class="info"><div class="title">地点:</div><div class="text">北京</div></div>
            </div>
            <div class="item-list">
                <div class="info"><div class="title">电话:</div><div class="text">17602226923</div></div>
                <div class="info"><div class="title">邮箱:</div><div class="text">1163621715@qq.com</div></div>
            </div>
        </div>
        <div class="item">
            <div class="item-title"><span>个人优势</span></div>
            <div class="item-list">
                <div class="info"><div class="title">个人网站:</div><div class="text"><UrlItem url="http://101.42.99.137" /></div></div>
            </div>
            <div class="item-list">
                <div class="info"><div class="text">擅长vue2全家桶,vue3,vite,</div></div>
            </div>
        </div>
        <div class="item">
            <div class="item-title"><span>个人技能</span></div>
            <div class="item-list">
                <div class="info"><div class="title">个人网站:</div><div class="text"><UrlItem url="http://101.42.99.137" /></div></div>
            </div>
            <div class="item-list">
                <div class="info"><div class="text">擅长vue2全家桶,vue3,vite,</div></div>
            </div>
        </div>
        <div class="item">
            <div class="item-title"><span>工作经历</span></div>
            <div class="item-list">
                <div class="info"><div class="title">个人网站:</div><div class="text"><UrlItem url="http://101.42.99.137" /></div></div>
            </div>
            <div class="item-list">
                <div class="info"><div class="text">擅长vue2全家桶,vue3,vite,</div></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import UrlItem from '@/components/common/url.vue'

export default {
  name: "resume",
  data(){
   return {
     value:''
   } 
  },
  components: {
    UrlItem
  }
};
</script>

<style lang="scss" scoped>
$bg: rgb(53,66,88);
.home{
    width: 70%;
    margin: 0px auto;
    background-color:$bg;
    padding: 10px 10px;
    border-radius: 10px;
}
.main{
   background-color: #fff;
   padding: 30px 20px;
    .item{
      &~.item{
        margin-top: 30px;
      }
        .item-title{
            background-color: rgb(239,239,239);
            font-size: 24px;
            color: #fff;
            margin-bottom: 10px;
            span{
                display: inline-block;
                height: 100%;
                padding: 0px 0px 0px 10px;
                width: 200px;
                background-color: $bg;
                border-radius: 0px 20px 20px 0px;
            }
        }
        .item-list{
          font-size: 16px;
          display: flex;
          &~.item-list{
            margin-top: 10px;
          }
          .info{
            flex: 1;
            display: flex;
            .title{
              margin-right: 8px;
            }
            .text{
              flex:1;
            }
          }
        }
    }
}
</style>
