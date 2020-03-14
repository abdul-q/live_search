import axios from "axios";

const state = {
    speakers: []

}

const getters = {
    allSpeakers: state => state.speakers

}

const actions = {
    async fetchSpeakers({ commit }) {
        try {
            
            // const response = await axios.get("http://localhost:8080/data/data.json");
            // const response = await axios.get("http://192.168.0.161:90/data/data.json");
            const response = await axios.get("http://localhost:90/data/data.json");

            commit("displaySpeakers", response.data)
        }
        catch (error) {
            console.log(error)
        }
    }
}

const mutations = {
    displaySpeakers: (state, payload) => {
        state.speakers = payload
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}