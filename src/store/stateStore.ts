import { createStore } from 'vuex'

export interface StateStore {
  bpm: number;
}

export const stateStore = createStore<StateStore>({
  state () {
    return {
      bpm: 0
    }
  },
  mutations: {
    set (state, n: number) {
      state.bpm = n;
    },
    increment (state, n: number) {
      state.bpm += n;
    },
  }
})