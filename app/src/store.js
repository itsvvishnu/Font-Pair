import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    primary:{
      fontFamily: ''
    },
    secondary: {
      fontFamily: ''
    },
    git:null,
    name:null
  },
  mutations: {
    newFont (state, { primary, secondary,git }) {
      state.primary.fontFamily = primary
      state.secondary.fontFamily = secondary
      state.git = 'https://github.com/'+git
      state.name = git
    }
  },
  actions: {
    updateFont (context, fonts) {
      if(fonts.font != null){
        context.commit('newFont', {
          primary: fonts.font.primary,
          secondary: fonts.font.secondary,
          git:fonts.font.git
        })
      } else {
        context.commit('newFont', {
          primary: '',
          secondary: ''
        })
      }
    }
  }
})
