<template>
  <v-footer class="justify-center" color="#292929" height="100">
    <v-icon color="blue">mdi-crown</v-icon>
    <div
      class="title font-weight-light grey--text text--lighten-1 text-center"
    >SanitizerKing {{ (new Date()).getFullYear() }}</div>
    <v-icon color="blue">mdi-crown</v-icon>
  </v-footer>
</template>

<script>
export default {
  name: "pageFooter",
  data() {
    return {};
  }
};
</script>

<style>
</style>