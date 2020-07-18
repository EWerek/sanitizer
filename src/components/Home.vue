<template>
  <div>
    <v-row no-gutters>
      <v-img
        :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        src="@/assets/splashpages/covid.png"
      >
        <v-container fill-height>
          <v-row justify="center" align="center">
            <v-col cols="12" sm="6">
              <v-row>
                <v-img
                  style="margin-bottom: 125px;"
                  max-height="100%"
                  max-width="100%"
                  contain
                  src="@/assets/logos/home13.png"
                />
              </v-row>
              <v-row>
                <v-btn
                  class="mx-auto"
                  color="white"
                  small
                  fab
                  outlined
                  elevation="20"
                  @click="$vuetify.goTo('#products')"
                >
                  <v-icon>mdi-chevron-double-down</v-icon>
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
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