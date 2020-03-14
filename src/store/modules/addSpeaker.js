import axios from "axios";

const state = {};

const getters = {};

const actions = {
  async addSpeaker({ commit }, payload) {
    try {
      // const response = await axios.post("http://192.168.0.161:90/data/data.json", payload);
      const response = await axios.post("http://localhost:90/data/data.json", payload);
      // const response = await axios.post("http://localhost:8080/data/data.json", payload);
        
      console.log(response.data);
      alert("New Speaker Added");
      commit("newSpeaker", response.data);
    } catch (error) {
      alert("Problems adding a new Speaker");
    }
  }
};

const mutations = {
  newSpeaker: (state, speaker, rootState) => {
    console.log(rootState);
    rootState.speakers(speaker);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
