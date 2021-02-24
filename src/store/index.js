import { createStore, createLogger } from 'vuex'
import auth from './modules/auth.module.js'
const plugins = []
if (process.env.NODE_ENV === 'development') { // Добавляем plugin только, если находимся в режиме разработки
  plugins.push(createLogger())
}
export default createStore({
  plugins,
  state() {
    return {
      message: null,
      sidebar: false
    }
  },
  mutations: {
    setMessage(state, message) {
      state.message = message
    },
    clearMessage(state) {
      state.message = null
    },
    openSidebar(state) {
      state.sidebar = true
    },
    closeSidebar(state) {
      state.sidebar = false
    }
  },
  actions: {
    // закрывать через 5 сек ...
    setMessage({ commit }, message) {
      commit('setMessage', message)
      setTimeout(() => {
        commit('clearMessage')
      }, 5000)

    }
  },
  modules: {
    auth
  }
})
