<template>
  <v-app class="pt-12">
    <v-container class="text-center">
      <!-- -->
      <v-row justify="center" align="center" class="py-0 my-0">
        <v-col>
          <h2
            :class="[$vuetify.breakpoint.smAndDown ? 'subtitle-2' : 'title']"
            class="mx-auto font-weight-light danger--text"
          >A DIVISION OF</h2>

          <v-avatar class="mx-auto" size="300" style="margin-top: -125px; margin-bottom: -100px;">
            <v-img height="100%" width="100%" contain src="@/assets/logos/emslast.png" />
          </v-avatar>
        </v-col>
      </v-row>

      <p :class="[$vuetify.breakpoint.smAndDown ? 'body-1' : 'title']" v-html="mainParagraph" />

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>
      </v-responsive>
    </v-container>
  </v-app>
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