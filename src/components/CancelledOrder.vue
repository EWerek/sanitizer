<template>
  <div>
    <v-app>
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <v-col>
            <v-container>
              <v-row align="center" justify="center">
                <v-btn color="red" large fab @click="navigate('/home','home')">
                  <v-icon>mdi-chevron-double-up</v-icon>
                </v-btn>
              </v-row>
            </v-container>
            <v-img src="@/assets/logos/cancelledorder.png"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
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




