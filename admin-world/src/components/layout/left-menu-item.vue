<template>
    <div class="left-menu-item-box">
        <template v-for="(item,index) in routes" >
            <template v-if="!item.meta||(item.meta&&!item.meta.unshow)">
                <MenuItem
                v-if="!item.children||!item.children.length"
                :key="index"
                :to="item.path"
                @click.native="clickMenuItem"
                :name="item.name">
                {{item.title}}
                </MenuItem>
                <Submenu
                :key="index"
                :name="item.name"
                v-else>
                    <template slot="title">
                        {{item.title}}
                    </template>
                    <left-menu-item :routes="item.children"></left-menu-item>
                </Submenu>
            </template>
        </template>
    </div>
</template>

<script>
import leftMenuItem from "@/components/layout/left-menu-item.vue"

import { mapGetters,mapMutations } from 'vuex'
export default {
    props:{
        // 要循环的路由列表
        routes:{
            type:Array,
            default:[]
        }
    },
    name:'left-menu-item',
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
        ...mapGetters('app',[
            'navigator'
        ])
    },
    methods:{
        clickMenuItem(){
            if(this.navigator&&this.navigator.mobile){
                this.LAYOUT_CHANGE()
            } 
        },
        ...mapMutations('layout',[
            'LAYOUT_CHANGE'
        ])
    }
}
</script>

<style lang="scss" scoped>
</style>