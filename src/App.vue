<template>
  <v-app>
    <add-speaker />
    <v-divider></v-divider>      
    <v-content><SpeakerList /></v-content>
  </v-app>
</template>

<script>
import SpeakerList from '@/components/SpeakerList.vue';
import AddSpeaker from '@/components/AddSpeaker.vue';

export default {
  name: 'App',

  components: {
    SpeakerList,
    AddSpeaker
  },
}
</script>
