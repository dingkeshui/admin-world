// 关于页面布局的状态控制
import { APP_LOADING_CHANGE } from '@/store/common/mutation-types.js'

const state = {
    laoding:false // app构建时的laoding
}

// 定义 getters
var getters = {
    laoding(state){
        return state.laoding
    }
}

const actions = {
    
}

const mutations = {
    // 改变左侧导航状态
    [APP_LOADING_CHANGE](state,data){
        state.laoding = data
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