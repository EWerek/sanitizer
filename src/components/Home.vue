<template>
  <div>
    <v-row no-gutters>
      <v-img
        :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        src="@/assets/covid.png"
      >
        <v-theme-provider dark>
          <v-container fill-height>
            <v-row align="center" class="blue--text mx-auto" justify="center">
              <v-col class="text-center" cols="12" tag="h1" style="margin-bottom: 75px;">
                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-1']"
                  class="font-weight-light white--text"
                >EMS</span>

                <br />

                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-1	': 'display-3']"
                  class="font-weight-black"
                >HAND SANITIZER</span>
              </v-col>

              <v-btn class="align-self-end" fab outlined @click="$vuetify.goTo('#about')">
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