const state = {
  bonus: 1000
}


const getters = {}

const mutations = {
  handleChange(state) {
    state.bonus = 3000;
  }
}

const actions = {
  handleActions(context) {
    context.commit('handleChange')
  }
}

export default new Vuex.Store({
  namespaced: true,
  state,
  getters,
  mutations,
  actions
})
