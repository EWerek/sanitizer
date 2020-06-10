<template>
  <div>
    <v-row>
      <v-container fill-height>
        <v-img src="@/assets/logos/cancelledorder.png">
          <v-row align="center" justify="center">
            <v-btn
              style="margin-top: 300px;margin-left:170px;"
              x-large
              class="align-self-end"
              fab
              outlined
              @click="navigate('/home','home')"
            >
              <v-icon>mdi-chevron-double-down</v-icon>
            </v-btn>
          </v-row>
        </v-img>
      </v-container>
    </v-row>
  </div>
</template>

    

<script>
export default {
  name: "cancelledorder",
  methods: {
    navigate(page, sectionID) {
      this.$router.push({ path: page }).catch(err => {
        if (err.name != "Error") {
          console.error(err);
        }
      });

      setTimeout(() => {
        this.$vuetify.goTo("#" + sectionID);
      }, 0);
      console.log(sectionID);
    }
  }
};
</script>

<style>
</style>