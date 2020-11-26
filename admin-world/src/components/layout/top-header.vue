<template>
    <div id="box">
        <Icon class="com-hand" @click="LAYOUT_CHANGE" :class="[{left:menuType}]" :size="iconSize" type="md-arrow-dropleft" />
    </div>
</template>

<script>
import { mapMutations,mapGetters } from 'vuex'

export default {
    name:'top-header',
    data(){
        return {
            iconSize:20
        }
    },
    mounted(){
    },
    computed:{
        ...mapGetters('layout',[
        'menuType'
        ])
    },
    methods:{
        ...mapMutations('layout',[
            'LAYOUT_CHANGE'
        ])
        
    }
}
</script>

<style lang="scss" scoped>
#box{
    height: 100%;
    background-color: #fff;
    .ivu-icon{
        transition: all .2s linear;
        &.left{
            transform: rotateZ(-180deg);
        }
    }
}
</style>