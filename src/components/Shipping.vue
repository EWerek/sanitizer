<template>
  <div id="app">
    <v-app>
      <HeaderSidebar />
      <v-content>
        <v-img
          :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          src="@/assets/products/unresponse.png"
        >
          <section id="home">
            <div style="text-align: center;">
              <h3>COMING SOON</h3>
            </div>
          </section>
        </v-img>
      </v-content>
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




