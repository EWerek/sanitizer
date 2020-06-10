<template>
  <div>
    <v-container class="py-12">
      <v-responsive
        class="mx-auto title font-weight-light mb-8 danger--text"
        max-width="720"
        style="text-align: center;"
      >AVAILABLE</v-responsive>

      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 1900 : 500"
        src="@/assets/splashpages/hand1.png"
      >
        <v-container fill-height>
          <v-row class="mx-auto">
            <v-col v-for="[value, title] of available" :key="title" cols="20" md="4">
              <div class="text-center">
                <div class="display-1 font-weight-black mb-4 blue--text" v-html="value"></div>

                <div class="title font-weight-regular text-uppercase" v-text="title"></div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "available",
  data() {
    return {
      available: [
        ["Single Bottles <br/>  500mL & 32oz", "$12.99 & $19.99"],
        ["Four Gallon <br/>  Case of Gel", "$325"],
        ["Wall Mount <br/>  Dispenser", "$75"],
        ["Metal Stand<br/>  (4.5 ft)", "$145"],
        [],
        ["Plexi-Glass<br/>  Cut & Installed", "$300"]
      ]
    };
  }
};
</script>

<style>
</style>