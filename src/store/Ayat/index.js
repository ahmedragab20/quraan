import axios from "axios";

const state = {
  index: null,
  loading: false,
};

const getters = {};

const mutations = {
  GET_AYAH(state, payload) {
    state.index = payload;
  },
  LOADER_HANDLER(state) {
    state.loading = !state.loading;
  },
};

const actions = {
  async getAyat({ commit }) {
    try {
      commit("LOADER_HANDLER");

      let ayah = Math.floor(Math.random() * 6236) + 1;
      let url = `https://api.alquran.cloud/ayah/${ayah}`;

      let response = await axios.get(url);

      commit("GET_AYAH", response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      commit("LOADER_HANDLER");
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
