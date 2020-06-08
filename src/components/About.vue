<template>
  <div>
    <div class="py-12"></div>
    <v-container class="text-center">
      <v-responsive
        class="mx-auto headline font-weight-medium mb-20 blue-grey--text"
        max-width="720"
      >SANITIZER KING</v-responsive>
      <v-responsive
        class="mx-auto title font-weight-light mb-8 danger--text"
        max-width="720"
      >A DIVISION OF EXECUTIVE MAINTENANCE SERVICES</v-responsive>

      <p :class="[$vuetify.breakpoint.smAndDown ? 'body-1' : 'title']" v-html="mainParagraph" />
      <v-avatar tile class="profile float-right" width="175" color="grey lighten-5" size="70">
        <v-img src="@/assets/emslogo.jpg" />
      </v-avatar>
      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>
      </v-responsive>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      mainParagraph:
        "EMS is a family run business that has been providing cleaning services and supplies to the Greater Toronto Area for 40 years.<br/><br/> During the current pandemic, our experts have formulated and locally produced hand sanitizer that meets all of the guidelines set forward by Heath Canada. Our products have been issued Natural Product Numbers and have been vetted by the Canadian Food Inspection Agency (CFIA).<br/><br/>Our hand sanitizer is sold in several formats: Four gallon cases or single 500ml or 32oz bottles. In addition to the liquid, we offer automatic refillable dispensers which can be mounted directely to any wall by tape or screws. Alternatively, we also offer a metal stand if preferable to the wall mount"
    };
  }
};
</script>

<style>
</style>