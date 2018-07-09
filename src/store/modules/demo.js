import * as types from '../mutation-types'

// initial state
const state = {
  example: false
}

// getters
const getters = {
  getExample: state => state.example
}

// actions
const actions = {
  changeExample ({ commit }) {
    commit(types.CHANGE_EXAMPLE)
  }
}

// mutations
const mutations = {
  [types.CHANGE_EXAMPLE] (state) {
    state.example = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
