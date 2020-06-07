<template>
  <div>
    <div class="py-12"></div>
    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">PRODUCTS</h2>
      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>
      <v-row>
        <v-col
          v-for="({ src, text, title, button, modalProps }, i) in products"
          :key="i"
          cols="12"
          md="4"
        >
          <v-img :src="src" class="mb-4" height="70%" max-width="100%"></v-img>
          <h3
            class="font-weight-black mb-4 text-uppercase"
            v-text="title"
            style="text-align: center;"
          ></h3>
          <Modal v-bind="modalProps" />
          <div class="title font-weight-light mb-5" v-text="text"></div>
          <component :is="button"></component>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="({ src, text, title, button }, i) in products2" :key="i" cols="12" md="4">
          <v-img :src="src" class="mb-4" height="80%" max-width="100%"></v-img>
          <h3 class="font-weight-black mb-4 text-uppercase" v-text="title"></h3>
          <Modal v-bind="modalProps" />
          <div class="title font-weight-light mb-5" v-text="text"></div>
          <component :is="button"></component>
        </v-col>
      </v-row>
      <div class="py-12"></div>
      <BtnCart />
      <BtnPayPal />
      <div ref="paypalButton" style="text-align: center;"></div>
    </v-container>
    <div class="py-12"></div>
  </div>
</template>

<script>
import BtnSingleBottle from "./BtnSingleBottle";
import BtnCase from "./BtnCase";
import BtnDispenser from "./BtnDispenser";
import BtnCart from "./BtnCart";
import BtnPayPal from "./BtnPayPal";
import BtnStand from "./BtnStand";
import BtnGlass from "./BtnGlass";
import Modal from "./Modal";

export default {
  name: "products",
  components: {
    BtnSingleBottle,
    BtnCase,
    BtnDispenser,
    BtnCart,
    BtnPayPal,
    BtnStand,
    BtnGlass,
    Modal
  },
  data() {
    return {
      products: [
        {
          src: require("@/assets/products/twobottles.png"),
          title: "Single Bottles",
          // text: "500mL ($12.99) & 32oz ($19.99)",
          button: "BtnSingleBottle",
          modalProps: {
            product: "Single Bottles",
            info: "Specs/Shipping"
          }
        },
        {
          src: require("@/assets/products/casebottle1.png"),
          title: "Four Gallon Case",
          //text: "Four 1 Gallon Bottles ($325)",
          button: "BtnCase"
        },
        {
          src: require("@/assets/products/dispenser1.png"),
          title: "Wall Mount Dispenser",
          // text: "Dispenser ($75)"
          button: "BtnDispenser"
        }
      ],
      products2: [
        {
          src: require("@/assets/products/stand.png"),
          title: "Metal Stand",
          // text: "Dispenser ($75)"
          button: "BtnStand"
        },
        {
          src: require("@/assets/products/glass.png"),
          title: "Plexi-Glass Shield",
          // text: "500mL ($12.99) & 32oz ($19.99)",
          button: "BtnGlass"
        },

        {
          src: require("@/assets/products/unPoster.jpg"),
          title: "",
          // text: "Dispenser ($75)"
          button: ""
        }
      ]
    };
  }
};
</script>

<style>
</style>