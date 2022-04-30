<template>
  <div :class="['home',{mobile:navigator&&navigator.mobile}]">
    <div class="main">
        <div class="home-tips" v-if="navigator&&navigator.mobile">本站UI框架(iView)基于PC端创建,个人修改后兼容移动端,但<span>PC端体验更佳!</span></div>
        <div class="item">
            <div class="item-title"><span>个人信息</span></div>
            <div class="item-list">
                <div class="info"><div class="title">姓名:</div><div class="text">丁明辉</div></div>
                <div class="info"><div class="title">性别:</div><div class="text">男</div></div>
            </div>
            <div class="item-list">
                <div class="info"><div class="title">年龄:</div><div class="text">26</div></div>
                <div class="info"><div class="title">地点:</div><div class="text">北京</div></div>
            </div>
            <div class="item-list">
                <div class="info"><div class="title">电话:</div><div class="text">17602226923</div></div>
                <div class="info"><div class="title">邮箱:</div><div class="text">1163621715@qq.com</div></div>
            </div>
            <div class="item-list">
                <div class="info"><div class="title">工作时间:</div><div class="text">4年</div></div>
                <div class="info"><div class="title">求职意向:</div><div class="text">前端工程师</div></div>
            </div>
        </div>
        <div class="item">
            <div class="item-title"><span>个人优势</span></div>
            <div class="item-list">
                <div class="info"><div class="title">个人网站:</div><div class="text"><UrlItem url="http://www.dingmh.cn" /></div></div>
            </div>
            <div class="item-list">
                <div class="info"><div class="title">vue博客:</div><div class="text"><UrlItem url="https://segmentfault.com/a/1190000011106939" /></div></div>
            </div>
            <div class="item-list">
                <div class="info"><div class="title ol"></div><div class="text">擅长vue全家桶，vue3+vite，精通小程序，webpack，typescript，上线5款程序以上。有独自开发从零到上线的经验。</div></div>
            </div>
            <div class="item-list">
                <div class="info"><div class="title ol"></div><div class="text">热爱钻研新鲜技术</div></div>
            </div>
        </div>
        <div class="item">
            <div class="item-title"><span>个人技能</span></div>
            <div class="item-list">
                <div class="info"><div class="title">1.</div><div class="text">开发过多款从0到1的项目，熟悉前端开发的各种流程，对于项目开发有一个整体的认知，具备一个完整的项目开发能力。</div></div>
            </div>
            <div class="item-list">
                <div class="info"><div class="title">2.</div><div class="text">熟悉各种web前端技术（HTML/HTML5/CSS/CSS3/Javascript),基础扎实，熟练掌握跨浏览器,跨终端的开发，良好的编码习惯。</div></div>
            </div>
            <div class="item-list">
                <div class="info"><div class="title">3.</div><div class="text">熟练掌握vue脚手架工具，vue+axios+element+vuex开发过从0到完整的项目。熟悉vue3+vite开发项目。</div></div>
            </div>
            <div class="item-list">
                <div class="info"><div class="title">4.</div><div class="text">熟悉webpack打包工具。了解webpack打包的原理以及流程。有从零创建webpack配置的经验。</div></div>
            </div>
            <div class="item-list">
                <div class="info"><div class="title">5.</div><div class="text">完整开发过后台管理系统。熟练路由拦截与权限控制，以及导航栏的动态生成。熟悉文件上传与文件导出功能，熟悉财务报表导出功能。</div></div>
            </div>
            <div class="item-list">
                <div class="info"><div class="title">6.</div><div class="text">熟练掌握小程序开发(原生与mpvue)。开发过多款从申请到上线的小程序，熟悉小程序开发的多种限制。（开发过支付宝小程序）</div></div>
            </div>
            <div class="item-list">
                <div class="info"><div class="title">7.</div><div class="text">第三方平台对接经验丰富，如微信支付、支付宝支付、银行卡快捷支付、神策数据埋点、七鱼客服、百度热力图、第三方物流、高德/百度地图等。</div></div>
            </div>
            <div class="item-list">
                <div class="info"><div class="title">8.</div><div class="text">熟练掌握嵌入式开发。有过与安卓/ios原生app合作开发的经验,有微信小程序webview开发经验。</div></div>
            </div>
            <div class="item-list">
                <div class="info"><div class="title">9.</div><div class="text">熟悉GIT/SVN，了解创建分支，拉取分支，合并分支并解决冲突，可以与多名开发者同时配合开发项目。</div></div>
            </div>
        </div>
        <div class="item">
            <div class="item-title"><span>工作经历</span></div>
            <div class="item-list-box">
              <div class="item-list-box-title"><span>亚信-前端工程师</span></div>
              <div class="item-list">
                  <div class="info"><div class="title">1.</div><div class="text">了解产品需求，调研需求需要的技术，提出相应的调整。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">2.</div><div class="text">公共组件的封装，避免魔法字符串，减少与业务的耦合，提高复用率。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">3.</div><div class="text">vue+vue-cli+axios+vuex+vue-router+element开发项目，封装请求功能，实现请求拦截。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">4.</div><div class="text">第三方ui组件的二次方封装，样式修改，更贴合需求。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">5.</div><div class="text">自定义webpack打包项目，自定义配置，更符合需求。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">6.</div><div class="text">使用vue3+vite+typescript开发项目，熟悉vue3的语法与开发流程。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">7.</div><div class="text">前台自定义数据埋点，后台可视化数据显示，便于运营管理。</div></div>
              </div>
            </div>
            <div class="item-list-box">
              <div class="item-list-box-title"><span>天九集团-前端工程师</span></div>
              <div class="item-list">
                  <div class="info info-title"><div class="title">1.</div><div class="text">小程序商城开发</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">1.1.</div><div class="text">小程序数据请求的拦截、封装。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">1.2.</div><div class="text">小程序分包加载，微信支付的对接。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">1.3.</div><div class="text">小程序商城首页组件化，店铺，支付，搜索，等主要页面开发。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">1.4.</div><div class="text">小程序订货会/普通专题/秒杀/拼团详情/礼品赠送等功能开发。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">1.5.</div><div class="text">小程序神策数据埋点/七鱼客服等第三方平台对接。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">1.6.</div><div class="text">小程序内嵌H5页面交互功能开发。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">1.7.</div><div class="text">小程序会员体系功能开发。</div></div>
              </div>
              <div class="item-list">
                  <div class="info info-title"><div class="title">2.</div><div class="text">互助购购M站/内嵌H5</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">2.1.</div><div class="text">M站的数据请求封装，路由拦截的实现。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">2.2.</div><div class="text">M站首页，店铺，分类，银行卡快捷支付功能开发。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">2.3.</div><div class="text">M站礼品赠送，礼品领取，微信分享功能开发。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">2.4.</div><div class="text">H5首页、店铺页面等主要页面开发，于APP交互，与小程序交互方法封装。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">2.5.</div><div class="text">M站/H5神策数据埋点功能，活动专题页功能开发。</div></div>
              </div>
              <div class="item-list">
                  <div class="info info-title"><div class="title">3.</div><div class="text">互助购后运营后台/商家后台</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">3.1.</div><div class="text">运营平台-内购会后台管理系统开发。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">3.2.</div><div class="text">运营平台-商城首页、普通专题、秒杀、订货会等功能管理系统开发。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">3.3.</div><div class="text">运营平台-商家资质审核、活动数据管理、订单列表等页面的升级与维护。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">3.4.</div><div class="text">商家后台-内购会系统整体的开发。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">3.5.</div><div class="text">商家后台-商家申请入驻流程的整体功能开发。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">3.6.</div><div class="text">商家后台-商家商品新建、编辑、发布功能的升级与维护。</div></div>
              </div>
            </div>
            <div class="item-list-box">
              <div class="item-list-box-title"><span>积纳有品-前端工程师</span></div>
              <div class="item-list">
                  <div class="info info-title"><div class="title">1.</div><div class="text">小程序商城开发</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">1.1.</div><div class="text">基于mpvue框架的小程序商城从0搭建到发布上线。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">1.2.</div><div class="text">开发首页、店铺、商品、支付、订单、分享、物流等整体电商流程。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">1.3.</div><div class="text">利用小程序canves动态前端生成图片利于用户保存本地。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">1.4.</div><div class="text">基于高德地图SDK实现类美团功能，附近商家、地图、距离、导航等。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">1.5.</div><div class="text">利用技术突破小程序壁垒，例如营业资质尚未审核通过代码就能发布上线，引导用户下载APP跳转出小程序到APP下载页面等功能。</div></div>
              </div>
              <div class="item-list">
                  <div class="info info-title"><div class="title">2.</div><div class="text">运营后台/商家后台开发</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">2.1.</div><div class="text">基于vue+element+axios+vuex+vue-router从0搭建后台管理系统。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">2.2.</div><div class="text">运营后台-登录用户权限功能管理开发。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">2.3.</div><div class="text">运营后台-商家审核，商品审核，订单管理，分类管理等功能开发。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">2.4.</div><div class="text">运营后天-订单/支付/提现等财务报表导出功能开发。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">2.5.</div><div class="text">商家后台-商家申请入住、资质上传等功能开发。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">2.6.</div><div class="text">商家后台-商品管理、订单管理、物流管理、退货管理功能开发。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">2.7.</div><div class="text">商家后台-表格导入批量修改商品、订单、物流等操作工开发。</div></div>
              </div>
            </div>
            <div class="item-list-box">
              <div class="item-list-box-title"><span>众享通赢网络科技-前端工程师</span></div>
              <div class="item-list">
                  <div class="info"><div class="title">1.</div><div class="text">微信公众号商城H5功能从0开发。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">2.</div><div class="text">商城首页、定位、附近商家、线下购物、线上扫码支付功能。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">3.</div><div class="text">商城商品详情、购物车管理、选择地址、确认下单、立即支付/稍后支付等购物流程。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">4.</div><div class="text">商城查看订单、申请退款、修改/撤销退款申请、确认收货，评价等订单流程。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">5.</div><div class="text">与安卓、IOSAPP混合开发。</div></div>
              </div>
              <div class="item-list">
                  <div class="info"><div class="title">6.</div><div class="text">微信地图SDK对接，百度热力图对接，移动端富文本编辑器等第三方平台对接。</div></div>
              </div>
            </div>
        </div>
        <div class="item">
          <div class="item-title"><span>教育背景</span></div>
          <div class="item-list">
              <div class="info"><div class="title">毕业院校:</div><div class="text">天津农学院</div></div>
              <div class="info"><div class="title">专 业:</div><div class="text">计算机系/电子商务</div></div>
          </div>
        </div>
        <div class="item">
          <div class="item-title"><span>自我评价</span></div>
          <div class="item-list">
              <div class="info"><div class="title ol"></div><div class="text">热爱钻研技术知识。编程基础扎实，web前端技术应用多，涉及广，用含有丰富的框架/组件化开发经验。</div></div>
          </div>
          <div class="item-list">
              <div class="info"><div class="title ol"></div><div class="text">负责从0开始的电商项目多，了解电商类项目整理流程，对电商类项目的开发有一个整体的认知。</div></div>
          </div>
          <div class="item-list">
              <div class="info"><div class="title ol"></div><div class="text">对代码负责，对业务负责，项目责任感强。</div></div>
          </div>
          <div class="item-list">
              <div class="info"><div class="title ol"></div><div class="text">对技术要求高，作为一名技术开发人员，技术是立足之本，深知互联网技术的迭代之快，唯有不断学习，积极进取才能不被时代抛弃。</div></div>
          </div>
        </div>
    </div>
    <div class="home-tips">
      本站由 <br v-if="navigator&&navigator.mobile">腾讯云/CentOS/Apache/Vue/VueX/Webpack/iView/Scss<br v-if="navigator&&navigator.mobile"> 提供技术支持
      <div class="home-tips-a"><a href="https://beian.miit.gov.cn/">京ICP备2021032015号-1</a></a></div>
    </div>
  </div>
</template>

<script>
import UrlItem from '@/components/common/url.vue'

import { mapGetters,mapMutations } from 'vuex'
export default {
  name: "resume",
  data(){
   return {
     value:''
   } 
  },
  computed:{
    ...mapGetters('app',[
      'navigator'
    ])
  },
  components: {
    UrlItem
  },
  mounted(){
  },
  methods:{
  }
};
</script>

<style lang="scss" scoped>
$bg: rgb(53,66,88);
.home{
    width: 70%;
    margin: 0px auto;
    background-color:$bg;
    padding: 30px 30px 10px 30px;
    border-radius: 10px;
    .home-tips{
      font-size: 12px;
      color: #fff;
      padding-top: 10px;
      text-align: center;
      span{
        color: #2b85e4;
      }
      &-a{
        a {
            color: #fff;
        }
      }
    }
    &.mobile{
      width: 100%;
      background-color: #fff;
      padding: 0px;
      .home-tips{
        padding: 0px 30px;
        color: $bg;
      }
      .item-list{
        display: block !important;
        .info{
          &~.info{
            margin-top: 10px;
          }
          .text{
            word-break: break-all;
          }
        }
      }
    }
}
.main{
   background-color: #fff;
   padding: 30px 20px;
    .item{
      &~.item{
        margin-top: 30px;
      }
      .item-list-box{
        &~.item-list-box{
          margin-top: 20px;
        }
        .item-list-box-title{
          font-size: 18px;
          color: #2b85e4;
          font-weight: bold;
          margin-bottom: 10px;
        }
      }
      .item-title{
          background-color: rgb(239,239,239);
          font-size: 24px;
          color: #fff;
          margin-bottom: 20px;
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
          &.info-title{
            font-weight: bold;
          }
          .title{
            margin-right: 8px;
            &.ol{
              &::after{
                display: inline-block;
                content: '';
                width: 10px;
                height: 10px;
                background-color: $bg;
                border-radius: 10px;
              }
            }
          }
          .text{
            flex:1;
          }
        }
      }
    }
}
</style>
