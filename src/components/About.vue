<template>
  <div class="pt-12">
    <v-container class="text-center">
      <!-- -->
      <v-row justify="center" align="center" class="py-0 my-0">
        <v-col>
          <h2
            :class="[$vuetify.breakpoint.smAndDown ? 'subtitle-2' : 'title']"
            class="mx-auto font-weight-light danger--text"
          >A DIVISION OF</h2>

          <v-avatar class="mx-auto" size="200" style="margin-top: -75px; margin-bottom: -80px;">
            <v-img height="100%" width="100%" contain src="@/assets/logos/emslast.png" />
          </v-avatar>
        </v-col>
      </v-row>

      <p :class="[$vuetify.breakpoint.smAndDown ? 'body-1' : 'title']" v-html="mainParagraph" />

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>
      </v-responsive>
      <BtnPayPal class="py-4" />
    </v-container>
  </div>
</template>

<script>
import BtnPayPal from "./BtnPayPal";
export default {
  name: "about",
  components: {
    BtnPayPal
  },
  data() {
    return {
      mainParagraph:
        "EMS is a family run business that has been providing cleaning services and supplies to the Greater Toronto Area for 40 years.<br/><br/> During the current pandemic, our experts have formulated and locally produced hand sanitizer that meets all of the guidelines set forward by Heath Canada. Our products have been issued Natural Product Numbers and have been vetted by the Canadian Food Inspection Agency (CFIA).<br/><br/>"
    };
  }
};
</script>

<style>
</style>