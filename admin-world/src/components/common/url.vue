<template>
    <div class="url-box">
        <span class="url com-hand">{{text||url}}</span>
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
        // 替换uel的文字,有就在页面显示文字不显示url
        text:[Number,String]
    },
    data(){
        return{

        }
    },
    methods:{
        copyFun(){
            let target = null;
            target = window.document.createElement('div');
            target.id = 'tempTarget';
            target.style.opacity = '0';
            target.innerText = this.url;
            try {
                let range = window.document.createRange();
                range.selectNode(target);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
                document.execCommand('copy');
                window.getSelection().removeAllRanges();
                console.log('复制成功')
            } catch (e) {
                console.log('复制失败',e)
            }
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
</style>