<template>
    <Menu
    mode="vertical"
    theme="light"
    :active-name="this.$route.name">
        <MenuItem 
        v-for="(item,index) in routerlist" 
        :key="index"
        :to="item.to"
        :name="item.name">
        {{item.title}}
        </MenuItem>
    </Menu>
    <!-- <div>123</div> -->
</template>

<script>
export default {
    name:'left-menu',
    data(){
        return {

        }
    },
    mounted(){
        console.log('111',this.$route)
    },
    computed:{
        routerlist(){
            let routes = this.$router.options.routes
            let arr = routes.map(val=>{
                return {
                    name:val.name,
                    to:val.path,
                    title:val.title
                }
            })
            console.log(123,arr)
            return arr
        }
    }
}
</script>

<style lang="scss" scoped>
.ivu-menu{
    width: 100% !important;
    height: 100% !important;
}
</style>