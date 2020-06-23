<template>
  <div style="margin-bottom: 0px;">
    <v-parallax
      :height="$vuetify.breakpoint.smAndDown ? 1900 : 500"
      src="@/assets/splashpages/hand1.png"
    ></v-parallax>
  </div>
</template>

<script>
export default {
  name: "available",
  data() {
    return {
      available: [
        ["Single Bottles <br/>  500mL & 32oz", "$12.99 & $19.99"],
        ["Four Gallon <br/>  Case of Gel", "$325"],
        ["Wall Mount <br/>  Dispenser", "$75"],
        ["Metal Stand<br/>  (4.5 ft)", "$145"],
        [],
        ["Plexi-Glass<br/>  Cut & Installed", "$300"]
      ]
    };
  }
};
</script>

<style>
</style>