<template>
  <div>
    <v-container>
      <h2 class="display-1 font-weight-bold mb-3 text-uppercase text-center">PRODUCTS</h2>
      <v-responsive
        class="mx-auto title font-weight-light mb-8 red--text"
        max-width="720"
        style="text-align: center;"
      >Made In Canada</v-responsive>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>
      <v-row style="text-align: center;">
        <v-col
          v-for="({ src, text, title, button, modalProps }, i) in products"
          :key="i"
          cols="12"
          md="4"
        >
          <v-img :src="src" class="mb-4" height="70%" max-width="100%">
            <v-container>
              <CadIcon class="float-right" />
            </v-container>
          </v-img>
          <h3 class="font-weight-black text-uppercase" v-text="title" style="text-align: center;"></h3>
          <div class="title font-weight-light" v-text="text"></div>
          <Modal v-bind="modalProps" class="py-3" />
          <component :is="button"></component>
        </v-col>
      </v-row>
      <v-row style="text-align: center;">
        <v-col
          v-for="({ src, text, title, button, modalProps }, i) in products2"
          :key="i"
          cols="12"
          md="4"
        >
          <v-img :src="src" class="mb-4" height="70%" max-width="100%">
            <v-container>
              <CadIcon class="float-right" />
            </v-container>
          </v-img>
          <h3 class="font-weight-black text-uppercase" v-text="title" style="text-align: center;"></h3>
          <div class="title font-weight-light" v-text="text"></div>
          <Modal v-if="modalProps != ''" v-bind="modalProps" class="py-3" />
          <component :is="button"></component>
        </v-col>
      </v-row>
      <v-icon @click="navigate('/shipping','home')" x-large>mdi-truck</v-icon>
      <BtnCart class="py-4" />
      <BtnPayPal class="py-4" />
    </v-container>
  </div>
</template>

<script>
import BtnBottle500ml from "./BtnBottle500ml";
import BtnBottle32oz from "./BtnBottle32oz";
import BtnCase from "./BtnCase";
import BtnDispenser from "./BtnDispenser";
import BtnCart from "./BtnCart";
import BtnPayPal from "./BtnPayPal";
import BtnStand from "./BtnStand";
import BtnGlass from "./BtnGlass";
import Modal from "./Modal";
import CadIcon from "./CustomIcon";

export default {
  name: "products",
  components: {
    BtnBottle500ml,
    BtnBottle32oz,
    BtnCase,
    BtnDispenser,
    BtnCart,
    BtnPayPal,
    BtnStand,
    BtnGlass,
    Modal,
    CadIcon
  },
  data() {
    return {
      products: [
        {
          src: require("@/assets/products/casebottle1.png"),
          title: "Case Four 1 Gallon Bottles",
          text: "$325",
          button: "BtnCase",
          modalProps: {
            product: "Four Gallon Case",
            info:
              "The case comes in four one gallon bottles.<br/><br/>Our Gel conforms to all health Canada guidelines and has been certified by the Canadian Food Inspection Agency (CFIA) including a Natural Product Number (NPN).<br/><br/>The gel contains Ethyl alcohol, Isopropyl alcohol, carbomer, Glycerine and Triethanolamine "
          }
        },
        {
          src: require("@/assets/products/bottle32oz.png"),
          title: "Single Bottle 32oz",
          text: "$19.99",
          button: "BtnBottle32oz",
          modalProps: {
            product: "32oz Bottle",
            info:
              "Our Gel conforms to all health Canada guidelines and has been certified by the Canadian Food Inspection Agency (CFIA) including a Natural Product Number (NPN).<br/><br/>The gel contains Ethyl alcohol, Isopropyl alcohol, carbomer, Glycerine and Triethanolamine "
          }
        },
        {
          src: require("@/assets/products/bottle500ml.png"),
          title: "Single Bottle 500ml",
          text: "$12.99",
          button: "BtnBottle500ml",
          modalProps: {
            product: "500 ml Bottle",
            info:
              "Our Gel conforms to all health Canada guidelines and has been certified by the Canadian Food Inspection Agency (CFIA) including a Natural Product Number (NPN).<br/><br/>The gel contains Ethyl alcohol, Isopropyl alcohol, carbomer, Glycerine and Triethanolamine "
          }
        }
      ],
      products2: [
        {
          src: require("@/assets/products/dispenser1.png"),
          title: "Wall Mount Dispenser",
          text: "$75 (Currently out of stock)",
          button: "BtnDispenser",
          modalProps: {
            product: "Wall Mount Dispenser",
            info:
              "Our Dispensers are easy to install and top up. <br/><br/>Wall mounted with tape or screws. Viewing window to check stock level.<br/><br/> Capacity - 800 mL. Dimensions - H 250mm x W 125mm x D 136mm.Weight 700 grams"
          }
        },
        {
          src: require("@/assets/products/stand.png"),
          title: "Metal Stand",
          text: "$145",
          button: "BtnStand",
          modalProps: {
            product: "Metal Stand",
            info: "Specs/Shipping"
          }
        },
        {
          src: require("@/assets/products/glass.png"),
          title: "Plexi-Glass Shield (Installed)",
          text: "$300 per sheet",
          button: "BtnGlass",
          modalProps: {
            product: "Plexi-Glass Shield",
            info:
              "The plexi-glass comes in 30 x 30 inch sheets and can be combined to make custom size shields.<br/><br/>The plexi-glass can also be cut to allow small objects to be passed through.<br/><br/>Delivery and installation within the GTA is included. Please call for any questions 416-567-4811 "
          }
        }
      ]
    };
  },
  methods: {
    navigate(page, sectionID) {
      this.$router.push({ path: page }).catch(err => {
        if (err.name != "Error") {
          console.error(err);
        }
      });

      setTimeout(() => {
        this.$vuetify.goTo("#" + sectionID);
      }, 0);
      console.log(sectionID);
    }
  }
};
</script>

<style>
.right {
  right: 0;
  position: fixed;
}
.container-scoped {
  position: absolute;
  bottom: 0px;
}
</style>