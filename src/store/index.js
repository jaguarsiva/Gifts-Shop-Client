import Vue from 'vue'
import Vuex from 'vuex'
import uniqueRandom from 'unique-random';
const userId = uniqueRandom(1,1000);

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notifications: [],
    isUserLogged: false
  },
  mutations: {
    PUSH_NOTIFICATION(state,payload){
      state.notifications.push(payload);
    },
    POP_NOTIFICATION(state,obj){
      var index = state.notifications.findIndex( not => not === obj );
      state.notifications.splice(index,1);
    },
    LOG_USER(state,val) {
      state.isUserLogged = val;
    } 
  },
  actions: {
    getUserID: () => userId()
  },
  modules: {
  }
})
