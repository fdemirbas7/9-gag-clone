import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts : []
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    ADD_POST(state, post) {
      state.posts.push(post)
    }
  },
  actions: {
    loadPosts({commit}) {
      axios.get('http://localhost:3000').then(res => {
        commit('SET_POSTS', res.data)
      }).catch(err => {
        throw new Error(`API ${err}`)
      })
    },
    postPost({commit}, payload) {
      axios.post('http://localhost:3000', payload)
      .then(res => {
        commit('ADD_POST', res.data)
      })
    }
  },
  modules: {
  }
})
