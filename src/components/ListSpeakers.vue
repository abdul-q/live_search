<template>
    <v-app>

        <v-list three-line>
            <v-list-item>

                <v-list-item-avatar>
                    <img src="'src/assets/images/'+speaker.shortname+_'tn.jpg'">
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title id="speaker-name" class="blue--text text--darken-4">{{ speaker.name }}</v-list-item-title>
                    <v-list-item-title id="reknown">{{ speaker.reknown }}</v-list-item-title>
                    <!-- <v-list-item-title><p>{{ speaker.bio }}</p></v-list-item-title> -->
                    <p id="bio" class="text-justify">{{ speaker.bio }}</p>
                </v-list-item-content>
                
            </v-list-item>
        </v-list>
        <v-divider></v-divider>

    </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
    export default {
        name: "ListSpeakers",
        props: ["speaker"],

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

<style scoped>
#speaker-name {
  font-weight: 600;
  color: #337ab7;
  font-size: 2.3em;
  line-height: 100%;
}

#reknown {
  font-weight: 600;
  color: #667b82;
  font-size: 1.5em;
}

#speakerImg {
  height: 50px;
  width: 50px;
}

#bio{
  font-weight: 400;
  font-size: 1.4em;
}
</style>