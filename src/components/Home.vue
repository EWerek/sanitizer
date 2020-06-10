<template>
  <div>
    <v-row no-gutters>
      <v-img
        :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        src="@/assets/splashpages/covid.png"
      >
        <v-theme-provider dark>
          <v-container fill-height>
            <v-row align="center" class="blue--text mx-auto" justify="center">
              <v-col class="text-center" cols="12" tag="h1" style="margin-bottom: 85px;">
                <v-avatar tile width="375" size="150">
                  <v-img src="@/assets/logos/home13.png" />
                </v-avatar>
                <!-- <v-icon color="blue" size="50">mdi-crown-outline</v-icon>
                <br />
                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']"
                  class="font-weight-medium white--text"
                >SANITIZER KING</span>
                <br />

                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'title	': 'display-1']"
                  class="font-weight-black blue--text"
                >HAND GELS</span>-->
              </v-col>

              <v-btn x-large class="align-self-end" fab outlined @click="$vuetify.goTo('#about')">
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
  name: "home",
  data() {
    return {};
  }
};
</script>

<style>
</style>