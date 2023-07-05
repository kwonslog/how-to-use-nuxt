export const state = () => ({
  counter: 0,
})

export const getters = {
  getCounter(state) {
    return state.counter + 1
  },
}

export const mutations = {
  increment(state) {
    state.counter++
  },
  setCounter(state, payload) {
    state.counter = payload
  },
}

export const actions = {
  fetchCounter({ commit }) {
    // 상태값을 직접 변경하지 않고 mutations 을 이용해야 한다.
    commit('increment')

    // 이렇게 호출하는것도 안된다.
    // mutations.increment(state)
  },
  setCounter({ commit }, payload) {
    commit('setCounter', payload)
  },
}
