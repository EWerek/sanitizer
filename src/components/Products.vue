<template>
  <div>
    <v-container>
      <v-row justify="center" align="center" class="py-0 my-0">
        <v-col justify="center" align="center">
          <v-avatar class="mx-auto mb-0" size="275px">
            <v-img height="100%" width="100%" contain src="@/assets/logos/productslogo3.png" />
          </v-avatar>
          <h2
            :class="[$vuetify.breakpoint.smAndDown ? 'subtitle-2' : 'title']"
            class="mx-auto font-weight-light red--text mt-n10"
          >MADE IN CANADA</h2>

          <BtnCart class="py-4" />
        </v-col>
      </v-row>
      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>

      <div class="pb-10">
        <v-card class="d-flex justify-center flex-sm-row flex-column mb-6" color="white" flat>
          <v-card
            v-for="({ src, text, title, discount, button, modalProps }, i) in products"
            :key="i"
            class="pa-2"
            :max-width="[`${windowWidth > 600 && windowWidth <= 1900 ? '300':'100%'}`]"
            flush
            tile
            flat
          >
            <v-img class="mb-4" :src="src" height="70%" max-width="100%">
              <v-container>
                <v-avatar class="float-right" size="70">
                  <v-img :src="cornerImage" />
                </v-avatar>
              </v-container>
            </v-img>
            <h3 class="font-weight-black text-uppercase" v-text="title" style="text-align: center;"></h3>
            <h2 class="title font-weight-light mx-auto" v-html="text" style="text-align: center;"></h2>
            <h4
              class="font-weight-light mx-auto red--text"
              v-html="discount"
              style="text-align: center;"
            ></h4>
            <Modal v-bind="modalProps" class="py-3" />
            <component :is="button" style="text-align: center;"></component>
          </v-card>
        </v-card>
      </div>
      <div>
        <v-expansion-panels flat class="mb-10">
          <v-expansion-panel>
            <v-expansion-panel-header
              color="blue"
              class="mx-auto font-weight-medium mb-10"
            >ACCESSORIES</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card class="d-flex justify-center flex-sm-row flex-column mb-6" color="white" flat>
                <v-card
                  v-for="({ src, text, title, button, modalProps,cornerImage }, i) in products2"
                  :key="i"
                  class="pa-2"
                  :max-width="[`${windowWidth > 600 && windowWidth <= 1900 ? '468':'100%'}`]"
                  flush
                  tile
                  flat
                >
                  <v-img class="mb-4" :src="src" height="70%" max-width="100%">
                    <v-container>
                      <v-avatar class="float-right" size="70">
                        <v-img :src="cornerImage" />
                      </v-avatar>
                    </v-container>
                  </v-img>
                  <h3
                    class="font-weight-black text-uppercase"
                    v-text="title"
                    style="text-align: center;"
                  ></h3>
                  <h2
                    class="title font-weight-light mx-auto"
                    v-text="text"
                    style="text-align: center;"
                  ></h2>
                  <Modal v-bind="modalProps" class="py-3" />
                  <component :is="button" style="text-align: center;"></component>
                </v-card>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-container>
  </div>
</template>

<script>
import BtnBottle500ml from "./BtnBottle500ml";
import BtnBottle32oz from "./BtnBottle32oz";
import BtnSingleBottles from "./BtnSingleBottles";
import BtnCase from "./BtnCase";
import BtnDispenser from "./BtnDispenser";
import BtnCart from "./BtnCart";
import BtnStand from "./BtnStand";
import BtnGlass from "./BtnGlass";
import Modal from "./Modal";
import LogoHeader from "./LogoHeader";

export default {
  name: "products",
  components: {
    BtnBottle500ml,
    BtnBottle32oz,
    BtnCase,
    BtnDispenser,
    BtnCart,
    BtnStand,
    BtnGlass,
    BtnSingleBottles,
    Modal,
    LogoHeader
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      products: [
        {
          src: require("@/assets/products/bottle500ml.png"),
          title: "Bottle 500ml",
          text: "$12.99",
          discount: "Save 10% 6pack and 15% 12pack",
          button: "BtnBottle500ml",
          modalProps: {
            product: "500 ml Bottle",
            info:
              "Our Gel conforms to all health Canada guidelines and has been certified by the Canadian Food Inspection Agency (CFIA) including a Natural Product Number (NPN).<br/><br/>The gel contains Ethyl alcohol, Isopropyl alcohol, carbomer, Glycerine and Triethanolamine "
          }
        },
        {
          src: require("@/assets/products/bottle32oz.png"),
          title: "Bottle 32oz",
          text: "$19.99",
          discount: "Save 10% 6pack and 15% 12pack",
          button: "BtnBottle32oz",
          modalProps: {
            product: "32oz Bottle",
            info:
              "Our Gel conforms to all health Canada guidelines and has been certified by the Canadian Food Inspection Agency (CFIA) including a Natural Product Number (NPN).<br/><br/>The gel contains Ethyl alcohol, Isopropyl alcohol, carbomer, Glycerine and Triethanolamine "
          }
        },

        {
          src: require("@/assets/products/onegallon.png"),
          title: "Case Four 1 Gallon Bottles",
          text: "$300",
          button: "BtnCase",
          modalProps: {
            product: "Four Gallon Case",
            info:
              "The case comes in four one gallon bottles.<br/><br/>Our Gel conforms to all health Canada guidelines and has been certified by the Canadian Food Inspection Agency (CFIA) including a Natural Product Number (NPN).<br/><br/>The gel contains Ethyl alcohol, Isopropyl alcohol, carbomer, Glycerine and Triethanolamine "
          }
        },
        {
          src: require("@/assets/products/dispenser.png"),
          title: "Wall Mount Dispenser",
          text: "$75",
          button: "BtnDispenser",
          modalProps: {
            product: "Wall Mount Dispenser",
            info:
              "Our Dispensers are easy to install and top up. <br/><br/>Wall mounted with tape or screws. Viewing window to check stock level.<br/><br/> Capacity - 800 mL. Dimensions - H 250mm x W 125mm x D 136mm.Weight 700 grams"
          }
        }
      ],
      products2: [
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
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      console.log(this.windowWidth);
    };
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