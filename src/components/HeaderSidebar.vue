<template>
  <div>
    <v-app-bar clipped-left app color="white" height="100">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-avatar tile class="profile" width="175" color="grey lighten-5" size="70">
        <v-img src="@/assets/emslogo.jpg" />
      </v-avatar>

      <v-toolbar-title class="font-weight-black headline blue--text"></v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" clipped left app mini-variant color="blue">
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon @click="$vuetify.goTo('#home')">mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon @click="$vuetify.goTo('#about')">mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About US</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon @click="$vuetify.goTo('#products')">mdi-cart</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Products</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon @click="$vuetify.goTo('#contactus')">mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      drawer: false,
      viewPortSmall: this.$vuetify.breakpoint.smAndDown
    };
  },
  mounted() {
    if (this.viewPortSmall === false) {
      this.drawer = true;
    }
  },
  watch: {
    viewPortSmall() {
      if (this.viewPortSmall === false) {
        this.drawer = false;
      }
    }
  }
};
</script>

<style>
</style>