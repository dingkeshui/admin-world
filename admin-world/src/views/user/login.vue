<template>
    <div class="box">
        <div>请输入密码</div>
        <div class="pasList">
            <div class="item" v-for="(item,index) in pasLength" :key="index">
                <span v-if="!(index==pasLength-1&&pasLength==pasData.length)">{{pasData[index]}}</span>
                <input :ref="'inp'" maxlength="1" v-show="(pasData.length===index&&pasData[index]==null)||(index==pasLength-1&&pasLength==pasData.length)" v-model="pasData[index]" type="text">
            </div>
        </div>
        <div class="butBox"><Button shape="circle" @click="goBack" icon="ios-arrow-back"></Button></div>
    </div>
</template>

<script>
import { mapMutations,mapActions } from 'vuex'

export default {
    name:'user-login',
    data () {
        return {
            // 登陆后跳转的页面
            to:'',
            //  密码长度
            pasLength:6,
            // 密码
            pasData:[]
        }
    },
    mounted(){
        this.$refs['inp'][0].focus()
        this.to = this.$route.query.to
        document.onkeydown = () => {
            var oEvent = window.event;
            if (oEvent.keyCode == 8) {
                this.pasData.pop()
            }
        }
    },
    methods:{
        ...mapMutations('user',[
            'USER_CHANGE'
        ]),
        ...mapActions('user',[
            'user_login'
        ]),
        goBack(){
            this.$router.go(-1)
        }
    },
    watch:{
        pasData:{
            handler:function(newVal,oldVla){
                if(newVal.length==this.pasLength){
                    this.user_login({token:newVal}).then(res=>{
                        if(res.code==200){
                            this.$Message.success('登陆成功～');
                            this.$router.replace({
                                path:this.to
                            })
                        } else {
                            this.$Message.error(res.msg||'登陆失败');
                        }
                    }).catch(res=>{
                        this.$Message.error(res.msg||'登陆失败');
                    })
                }
                this.$nextTick(()=>{
                    if(newVal.length<this.pasLength){
                        this.$refs['inp'][newVal.length].focus()
                    }
                })
            },
            deep:true
        }
    }
}
</script>

<style lang="scss" scoped>
.box{
    width: 100vw;
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    .pasList{
        margin-top: 5%;
        display: flex;
        align-content: center;
        justify-content: center;
        .item:nth-child(n+2){
            margin-left: 20px;
        }
        .item{
            font-size: 34px;
            width: 70px;
            height: 70px;
            line-height: 64px;
            text-align: center;
            box-sizing: border-box;
            border-radius:4px;
            padding: 2px;
            input{
                text-align: center;
                border: 0px;
                outline: none;
                width: 100%;
                height: 100%;
                color: #515a6e;
            }
            border: 1px solid #ccc;
        }
    }
    .butBox{
        margin-top: 10%;
    }
}
</style>