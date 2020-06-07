<template>
  <div id="app">
    <v-app>
      <HeaderSidebar />
      <v-content>
        <section id="home">
          <div style="text-align: center;
  border: 3px solid green;">
            <h3>COMING SOON</h3>
          </div>
        </section>
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




