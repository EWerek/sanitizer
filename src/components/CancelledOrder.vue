<template>
  <div>
    <v-row no-gutters>
      <v-img src="@/assets/logos/colorLogoNoBack.png">
        <v-theme-provider dark>
          <v-container fill-height>
            <v-row>
              <v-btn x-large class="align-self-end" fab outlined @click="navigate('/home','home')">
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>
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