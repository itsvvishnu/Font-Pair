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
    submittedBy:null
  },
  mutations: {
    newFont (state, { primary, secondary,submittedBy }) {
      state.primary.fontFamily = primary
      state.secondary.fontFamily = secondary
      state.submittedBy = 'https://github.com/'+submittedBy+'.png?size=40'
    }
  },
  actions: {
    updateFont (context, fonts) {
      if(fonts.font != null){
        context.commit('newFont', {
          primary: fonts.font.primary,
          secondary: fonts.font.secondary,
          submittedBy:fonts.font.git
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
