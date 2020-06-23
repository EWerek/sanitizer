<template>
  <div>
    <div class="py-12"></div>
    <v-container>
      <v-row justify="center" align="center" class="py-0 my-0">
        <v-avatar class="mx-auto" size="275px" style="margin-top: -150px; margin-bottom: -100px;">
          <v-img height="100%" width="100%" contain src="@/assets/logos/featureslogo2.png" />
        </v-avatar>
      </v-row>
    </v-container>
    <v-container class="text-center">
      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>
      <v-row>
        <v-col v-for="({ icon, title, text }, i) in features" :key="i" cols="12" md="4">
          <v-card height="400" class="py-12 px-4" color="grey lighten-5" flat>
            <v-theme-provider dark>
              <div>
                <v-avatar color="primary" size="88">
                  <v-icon large v-text="icon"></v-icon>
                </v-avatar>
              </div>
            </v-theme-provider>
            <v-card-title class="justify-center font-weight-black text-uppercase" v-text="title"></v-card-title>
            <v-card-text class="subtitle-1" v-html="text"></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="py-12"></div>
  </div>
</template>

<script>
export default {
  name: "features",
  data() {
    return {
      features: [
        {
          icon: "mdi-virus",
          title: "Kills Pathogens",
          text:
            "Our gel contains 70% alcohol The use of hand sanitizers has been proven to reduce the risk of pathogens and cross contamination. Our Hand Sanitizer is effective against coronavirus"
        },
        {
          icon: "mdi-truck",
          title: "Delivery",
          text:
            "Free shipping on orders over $50.00 <br/> Delivery within 1-3 business days"
        },
        {
          icon: "mdi-cellphone-basic",
          title: "Contact Info",
          text:
            "info@sanitizerking.ca <br/>  416-567-4811  <br/> Executive Maintenance Services <br/>  164 Torbay Rd, Markham, ON L3R 1G6, Canada"
        }
      ]
    };
  }
};
</script>

<style>
</style>