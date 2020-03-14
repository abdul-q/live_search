import Vue from "vue";
import Vuex from "vuex";

import speakerList from "@/store/modules/speakerList"
import addSpeaker from "@/store/modules/addSpeaker"


Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    speakerList,
    addSpeaker
  }
});
