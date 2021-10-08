// 关于页面布局的状态控制
import { APP_LOADING_CHANGE,APP_NAVIGATOR_CHANGE } from '@/store/common/mutation-types.js'

const state = {
    laoding:false, // app构建时的laoding
    navigator:{
        mobile:false
    }
}

// 定义 getters
const getters = {
    laoding(state){
        return state.laoding
    },
    navigator(state){
        return state.navigator
    }
}

const actions = {
    
}

const mutations = {
    // 改变laoding状态
    [APP_LOADING_CHANGE](state,data){
        state.laoding = data
    },
    // 改变app 设备信息
    [APP_NAVIGATOR_CHANGE](state,data){
        Object.assign(state.navigator,data)
        console.log('navigator',state.navigator)
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