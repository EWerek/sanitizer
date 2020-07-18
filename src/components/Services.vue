<template>
  <div class="pt-0">
    <v-container class="text-center">
      <v-responsive class="mx-auto mb-12" width="800">
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>
      <v-row justify="center" align="center" class="py-0 my-0">
        <v-col justify="center" align="center">
          <h2
            :class="[$vuetify.breakpoint.smAndDown ? 'subtitle-2' : 'title']"
            class="mx-auto font-weight-medium blue--text mt-10"
          >SERVICES</h2>
        </v-col>
      </v-row>

      <v-row justify="center" align="center" class="py-0 my-0">
        <v-col>
          <v-avatar :size="[`${windowWidth > 600 && windowWidth <= 2900 ? '500':'275'}`]">
            <v-img height="65%" width="65%" src="@/assets/splashpages/sprayguy.jpg" />
          </v-avatar>
        </v-col>
      </v-row>

      <p
        :class="[$vuetify.breakpoint.smAndDown ? 'body-1' : 'title']"
        style="text-align:center;"
        v-html="mainParagraph"
      />
      <v-responsive
        class="mx-auto title font-weight-medium mb-8 blue--text text--darken-2"
        max-width="720"
        style="text-align: center;"
      >
        Please contact us for a quote at
        416-567-4811 or
        <br />info@sanitizerking.ca
      </v-responsive>
      <v-row>
        <v-btn
          class="mx-auto mb-5"
          elevation="20"
          color="blue"
          small
          fab
          @click="$vuetify.goTo('#contact')"
        >
          <v-icon>mdi-chevron-double-down</v-icon>
        </v-btn>
      </v-row>

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>
      </v-responsive>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "services",
  components: {},
  data() {
    return {
      windowWidth: window.innerWidth,
      mainParagraph:
        "To ensure that we can continue offering our clients top-tier service, we have introduced an electrostatic spray service. Our trained sanitisation experts can cover 6000 cubic feet with a single tank of solution. <br/><br/> When sprayed onto the surfaces of your doors, common areas, gyms, and parking levels, the disinfectant will evaporate within just a few minutes. Compared to Lysol wipes, which require a minimum of 30 minutes to take effect, our solution disinfects and kills 99.9% of germs immediately. <br/><br/>The solution has been tested and approved by Health Canada and the Agricultural Ministry of Canada. The agencies praised the remarkable efficiency of the service, which is 30 times faster than manually wiping down an area of the same size. Regular servicing will disinfect and keep your targeted areas clean for both preventative and reactionary purposes. <br/><br/> "
    };
  },
  mounted() {
    console.log(this.windowWidth);
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      console.log(this.windowWidth);
    };
  }
};
</script>

<style>
</style>