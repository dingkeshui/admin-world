// 关于页面布局的状态控制
import { LAYOUT_CHANGE } from '@/store/common/mutation-types.js'

const state = {
    menuType:false // 左侧导航是否收起  默认false 不收起
}

// 定义 getters
var getters = {
    menuType(state){
        return state.menuType
    }
}

const actions = {
    
}

const mutations = {
    // 改变左侧导航状态
    [LAYOUT_CHANGE](state){
        state.menuType = !state.menuType
    }
}

// 最后统一导出
export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}