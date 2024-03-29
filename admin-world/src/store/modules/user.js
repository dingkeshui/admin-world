// 关于用户的状态控制
import { USER_CHANGE } from '@/store/common/mutation-types.js'
import { reject, resolve } from 'core-js/fn/promise'

const state = {
    // 用户信息
    userInfo:{
        token:''
    }
}

// 定义 getters
var getters = {
    userInfo(state){
        return state.userInfo
    }
}

const actions = {
    user_login(context,newData){
        return new Promise((resolve,reject)=>{
            if(newData&&newData.token&&newData.token.toString()=='3,1,9,2,0,6') {
                context.commit('USER_CHANGE',newData)
                resolve({code:200})
            } else {
                reject({
                    code:0,
                    msg:'密码错误'
                })
            }
        })
    }
}

const mutations = {
    // 改变登陆状态
    [USER_CHANGE](state,newData){
        state.userInfo = Object.assign(state.userInfo,newData)
        sessionStorage.setItem('userInfo', JSON.stringify(state.userInfo))
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