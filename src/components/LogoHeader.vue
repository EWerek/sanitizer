<template>
  <v-row justify="center" align="center" class="py-0 my-0">
    <v-col cols="12" :sm="size">
      <v-img
        max-height="100%"
        max-width="100%"
        contain
        :src="require(`@/assets/logos/${logoName}`)"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "logoheader",
  props: {
    logoName: { type: String },
    size: { type: Number }
  }
};
</script>

<style>
</style>