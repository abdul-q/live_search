<template>
  <v-app>
    <v-content>
      <v-card width="400" class="mx-mx-auto mt-5">
          <v-card-title>
            <h2 class="display-1">Add Speaker</h2>
          </v-card-title>
          <v-card-text>
            <v-form>
                <v-text-field outlined prepend-icon="mdi-account-circle" label="Given Name" readonly filled />
                <v-text-field outlined prepend-icon="mdi-account-circle" label="Family Name" disabled />
                <v-text-field outlined prepend-icon="mdi-account-circle" label="Other Names" />
                <v-text-field
                  outlined
                  name="Password"
                  type="Pasword"
                  label="Password"
                  prepend-icon="mdi-lock"
                  append-icon="mdi-eye"
                  id="id"
                />
                <v-text-field outlined prepend-icon="mdi-comment" label="Reknown" />
                <v-textarea outlined prepend-icon="mdi-comment" label="Bio" />
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="success">Submit</v-btn>
          </v-card-actions>
        </v-card>      
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
