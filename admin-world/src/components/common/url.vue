<template>
    <div class="url-box">
        <span @click="openUrl" class="url com-hand">{{text||url}}</span>
        <span v-if="copy" class="copy com-hand" @click="copyFun">复制</span>
    </div>
</template>

<script>
export default {
    name:'url-box',
    props:{
        //  要跳转的地址
        url:String,
        //  是否显示复制按钮
        copy:{
            type:Boolean,
            default:true
        },
        //  点击在新窗口打开链接
        open:{
            type:Boolean,
            default:true
        },
        // 替换url的文字,有就在页面显示文字不显示url
        text:[Number,String]
    },
    data(){
        return{

        }
    },
    methods:{
        openUrl(){
            if(this.open){
                window.open(this.url)
            }
        },
        copyFun(){
            let oInput = document.createElement('input');
            oInput.value = this.url;
            document.body.appendChild(oInput);
            oInput.select(); // 选择对象;
            console.log(oInput.value)
            document.execCommand("Copy"); // 执行浏览器复制命令
            document.body.removeChild(oInput)
            this.$Message.success({
                content: '复制成功',
                duration: 3
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.copy{
    display: inline-block;
    padding: 0px 10px;
    background-color: #515a6e;
    color: #fff;
    font-size: 12px;
    border-radius: 10px;
    margin-left: 10px;
}
.url{
    color: #2d8cf0;
}
</style>