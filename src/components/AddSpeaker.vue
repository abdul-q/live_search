<template>
  <v-app>
    <v-content>

      <v-card width="300" class="mx-mx-auto mt-5">

        <v-toolbar color="cyan" dark>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>Add Speaker</v-toolbar-title>
        </v-toolbar>
      
          <v-card-text>
            <v-form >
                <v-text-field outlined prepend-icon="mdi-account-circle"
                  label="Given Name" required
                  v-model="speakerData.firstName"
                />
                <v-text-field outlined prepend-icon="mdi-account-circle"
                  label="Other Names"
                  v-model="speakerData.otherName"
                />
                <v-text-field outlined prepend-icon="mdi-account-circle"
                  label="Family Name" required
                  v-model="speakerData.lastName"
                />
                <!-- <v-text-field
                  outlined
                  name="Password"
                  type="Pasword"
                  label="Password"
                  prepend-icon="mdi-lock"
                  append-icon="mdi-eye"
                  id="id"
                /> -->
                <v-text-field outlined prepend-icon="mdi-comment"
                  label="Reknown"
                  v-model="speakerData.reknown"
                />
                <v-textarea outlined prepend-icon="mdi-comment"
                  label="Bio"
                  v-model="speakerData.bio"
                />
            </v-form>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>            
            <v-btn @click="onSubmit" color="success" type="Submit" value="submit">Submit</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="error" >Clear</v-btn>
          </v-card-actions>
          
      </v-card>      
    </v-content>
  </v-app>
</template>

<script>
import { mapActions} from "vuex";

export default {
  name: "AddSpeaker",

  data() {
    return {
      speakerData: [],
      // payload: {
      //   name: "Takeda Kenshi Takahashi",
      //   reknown: "Shirai Ryu Clan",
      //   bio: "A loyal disciple of Hanzo Hasashi"
      // parseData: {        
      //   givenName: " ",
      //   otherName: " ",
      //   familyName: " ",
      //   reknown: " ",
      //   bio: " "
      // }
      // parseData: {        
      //   name:
      //     speakerData.givenName +
      //     " " +
      //     speakerData.otherName +
      //     " " +
      //     speakerData.familyName,
      //   reknown: speakerData.reknown,
      //   bio: speakerData.bio
      // }  
    }
  },
  
  methods: {
    ...mapActions(["addSpeaker"]),

    // createSpeaker() {
    //   this.$store.dispatch("addSpeaker", )
    // },
    
    onSubmit(e) {
        var parseData = {        
        name:
          this.speakerData.givenName +
          " " +
          this.speakerData.otherName +
          " " +
          this.speakerData.familyName,
        reknown: this.speakerData.reknown,
        bio: this.speakerData.bio
      }
      e.preventDefault();
      this.$store.dispatch("addSpeaker", parseData);
      this.speakerData = [];
    }

  },
}
</script>

<style scoped>

</style>