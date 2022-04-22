import {createStore} from "vuex";
import VuexPersist from "vuex-persist";
const vuexLocal=new VuexPersist({
    storage:window.localStorage
})
export default createStore({
    state:{
   user:[],
    },
    mutations:{
add(state,obj){
    state.user.push(obj)
},
delMore(state){
    state.user=state.user.filter(item=>{
        return !item.checked
    })
},
qx(state,checked){
    state.user.map(item=>{
        return item.checked=checked
    })
},
fx(state,index){
    console.log("反选主席",state)
},
sc(state,index){
    state.user.splice(index,1)
}
    },
    getters:{

    },
    plugins:[vuexLocal.plugin],
})