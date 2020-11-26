<template>
    <Menu
    mode="vertical"
    theme="light"
    :active-name="$route.name">
        <left-menu-item :routes="$router.options.routes"></left-menu-item>
    </Menu>
</template>

<script>
import leftMenuItem from "@/components/layout/left-menu-item.vue"

export default {
    name:'left-menu',
    components:{
        leftMenuItem
    },
    data(){
        return {

        }
    },
    mounted(){
    },
    computed:{
        
    }
}
</script>

<style lang="scss" scoped>
.ivu-menu{
    width: 100% !important;
    height: 100% !important;
}
</style>