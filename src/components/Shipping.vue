<template>
  <div id="app">
    <v-app>
      <HeaderSidebar />
      <section id="home">
        <v-content>
          <v-img
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            src="@/assets/splashpages/unresponse.png"
          >
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row align="center" class="blue--text mx-auto" justify="center">
                  <v-col class="text-center" cols="12" tag="h1" style="margin-bottom: 75px;">
                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-1']"
                      class="font-weight-light black--text"
                    >We deliver for free within the GTA. Normal delivery times are 2-4 business days. Please call us for orders outside the GTA.</span>
                  </v-col>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-content>
      </section>
      <PageFooter />
    </v-app>
  </div>
</template>

<script>
import HeaderSidebar from "./HeaderSidebar";
import PageFooter from "./PageFooter";

export default {
  name: "Shipping",
  components: {
    HeaderSidebar,
    PageFooter
  },
  data() {
    return {};
  },

  methods: {},
  mounted() {},

  computed: {}
};
</script>




