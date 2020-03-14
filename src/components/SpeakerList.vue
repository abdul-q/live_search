<template>
    <div>
        <v-app v-for="speaker in speakers" :key="speaker.index">
            <ListSpeakers :speaker="speaker"></ListSpeakers>
            <!-- <v-list v-for="speaker in speakers" :key="speaker.index">
                {{ speaker.name }}
            </v-list> -->
        </v-app>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ListSpeakers from "@/components/ListSpeakers.vue";

export default {
  name: "SpeakerList",
  components: {
    ListSpeakers
  },
  methods: {
    ...mapActions(["fetchSpeakers"])
  },
  computed: {
    ...mapGetters({
    speakers: "allSpeakers"
    })
  },
  created () {
    this.fetchSpeakers()
  }
}
</script>

<style scoped></style>
