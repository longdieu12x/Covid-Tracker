import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    country: '',
    title: 'Global',
    stats: {},
  },
  getters: {
    getCountry(state){
      return state.country;
    },
    getStats(state){
      return state.stats;
    },
    getTitle(state){
      return state.title;
    },
  },
  mutations: {
    refreshCountry(state,value){
      state.country = value;
    },
    refreshStats(state,value){
      state.stats = value;
    },
    refreshTitle(state,value){
      state.title= value;
    },
  
  },
  actions: {
    async fetchCovidData(){
      const res = await fetch('https://api.covid19api.com/summary');
      const data = await res.json();
      return data;
    },
  },
  modules: {
  }
})
