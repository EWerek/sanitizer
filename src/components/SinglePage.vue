<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer v-model="drawer" clipped right app mini-variant color="blue">
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
      <v-app-bar clipped-right app color="white" height="100">
        <v-avatar tile class="profile" width="175" color="grey lighten-5" size="70">
          <v-img src="@/assets/emslogo.jpg" />
        </v-avatar>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title class="font-weight-black headline blue--text"></v-toolbar-title>
      </v-app-bar>

      <v-content style="padding-left: 0px; padding-top: 0px; padding-right: 0px;">
        <section id="home">
          <v-row no-gutters>
            <v-img
              :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
              src="@/assets/covid.png"
            >
              <v-theme-provider dark>
                <v-container fill-height>
                  <v-row align="center" class="blue--text mx-auto" justify="center">
                    <v-col class="text-center" cols="12" tag="h1" style="margin-bottom: 75px;">
                      <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-1']"
                        class="font-weight-light white--text"
                      >EMS</span>

                      <br />

                      <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1	': 'display-3']"
                        class="font-weight-black"
                      >HAND SANITIZER</span>
                    </v-col>

                    <v-btn class="align-self-end" fab outlined @click="$vuetify.goTo('#about')">
                      <v-icon>mdi-chevron-double-down</v-icon>
                    </v-btn>
                  </v-row>
                </v-container>
              </v-theme-provider>
            </v-img>
          </v-row>
        </section>

        <section id="about">
          <div class="py-12"></div>

          <v-container class="text-center">
            <v-responsive
              class="mx-auto title font-weight-light mb-8 blue-grey--text"
              max-width="720"
            >EXECUTIVE MAINTENANCE SERVICES</v-responsive>
            <p
              :class="[$vuetify.breakpoint.smAndDown ? 'body-1' : 'title']"
              v-html="mainParagraph"
            />

            <v-responsive class="mx-auto mb-8" width="56">
              <v-divider class="mb-1"></v-divider>
            </v-responsive>

            <v-responsive
              class="mx-auto title font-weight-light mb-8 red--text"
              max-width="720"
            >AVAILABLE</v-responsive>

            <v-parallax
              :height="$vuetify.breakpoint.smAndDown ? 1900 : 500"
              src="@/assets/hand1.png"
            >
              <v-container fill-height>
                <v-row class="mx-auto">
                  <v-col v-for="[value, title] of stats" :key="title" cols="12" md="3">
                    <div class="text-center">
                      <div class="display-1 font-weight-black mb-4 blue--text" v-html="value"></div>

                      <div class="title font-weight-regular text-uppercase" v-text="title"></div>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-parallax>
          </v-container>

          <div class="py-12"></div>
        </section>

        <section id="features" class="grey lighten-3">
          <div class="py-12"></div>

          <v-container class="text-center">
            <h2 class="display-2 font-weight-bold mb-3">FEATURES</h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-row>
              <v-col v-for="({ icon, title, text }, i) in features" :key="i" cols="12" md="4">
                <v-card class="py-12 px-4" color="grey lighten-5" flat>
                  <v-theme-provider dark>
                    <div>
                      <v-avatar color="primary" size="88">
                        <v-icon large v-text="icon"></v-icon>
                      </v-avatar>
                    </div>
                  </v-theme-provider>

                  <v-card-title
                    class="justify-center font-weight-black text-uppercase"
                    v-text="title"
                  ></v-card-title>

                  <v-card-text class="subtitle-1" v-html="text"></v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          <div class="py-12"></div>
        </section>

        <section id="products">
          <div class="py-12"></div>

          <v-container>
            <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">PRODUCTS</h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-row>
              <v-col v-for="({ src, text, title }, i) in articles" :key="i" cols="12" md="4">
                <v-img :src="src" class="mb-4" height="70%" max-width="100%"></v-img>

                <h3 class="font-weight-black mb-4 text-uppercase" v-text="title"></h3>

                <div class="title font-weight-light mb-5" v-text="text"></div>
              </v-col>
            </v-row>
            <div ref="paypalButton" style="text-align: center;"></div>
          </v-container>

          <div class="py-12"></div>
        </section>
        <section id="contactus">
          <v-sheet id="contact" color="#333333" dark tag="section" tile>
            <div class="py-12"></div>

            <v-container>
              <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Contact Us</h2>

              <v-responsive class="mx-auto mb-12" width="56">
                <v-divider class="mb-1"></v-divider>

                <v-divider></v-divider>
              </v-responsive>

              <v-theme-provider light>
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="name" flat label="Name*" solo></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field v-model="email" flat label="Email*" solo></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea v-model="message" flat label="Message*" solo></v-textarea>
                  </v-col>

                  <v-col class="mx-auto" cols="auto">
                    <v-btn color="accent" x-large @click="sendEmail">Submit</v-btn>
                  </v-col>
                </v-row>
              </v-theme-provider>
            </v-container>

            <div class="py-12"></div>
          </v-sheet>
        </section>
      </v-content>

      <v-footer class="justify-center" color="#292929" height="100">
        <div
          class="title font-weight-light grey--text text--lighten-1 text-center"
        >&copy; {{ (new Date()).getFullYear() }}</div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import { mdiBottleTonicPlus } from "@mdi/js";
import emailjs from "emailjs-com";

export default {
  name: "SanitizerKing",
  data() {
    return {
      drawer: true,
      viewPortSmall: this.$vuetify.breakpoint.smAndDown,
      message: "",
      email: "",
      name: "",
      svgPath: mdiBottleTonicPlus,
      template_params: {
        reply_to: "",
        from_name: "",
        to_name: "",
        message_html: ""
      },
      mainParagraph:
        "EMS is a family run business that has been providing cleaning services and supplies to the Greater Toronto Area for 40 years.<br/><br/> During the current pandemic, our experts have formulated and locally produced hand sanitizer that meets all of the guidelines set forward by Heath Canada. Our products have been issued Natural Product Numbers and have been vetted by the Canadian Food Inspection Agency (CFIA).<br/><br/>Our hand sanitizer is sold in several formats: Four gallon cases or single 500ml or 32oz bottles. In addition to the liquid, we offer automatic refillable dispensers which can be mounted directely to any wall by tape or screws. Alternatively, we also offer a metal stand if preferable to the wall mount",
      articles: [
        {
          src: require("@/assets/products/twobottles.png"),
          title: "Single Bottles",
          text: "500mL ($12.99) & 32oz ($19.99)"
        },
        {
          src: require("@/assets/products/casebottle1.png"),
          title: "Case of Gel",
          text: "Four 1 Gallon Bottles ($325)"
        },
        {
          src: require("@/assets/products/dispenser1.png"),
          title: "Wall Mount",
          text: "Dispenser ($75)"
        }
      ],
      features: [
        {
          icon: "mdi-virus",
          title: "Kills Pathogens",
          text:
            "Contains 70% alcohol The use of hand sanitizers has been proven to reduce the risk of pathogens and cross contamination. Our Hand Sanitizer is effective against coronavirus"
        },
        {
          icon: "mdi-tools",
          title: "Easy to Install",
          text:
            "Practical and hygienic. Easy to top up. Wall mounted. Viewing window to check stock level. Capacity - 800 mL. Dimensions - H 250mm x W 125mm x D 136mm.Weight 700 grams"
        },
        {
          icon: "mdi-cellphone-basic",
          title: "Contact Info",
          text:
            "Ethan Werek <br/> Executive Maintenance Services <br/>  416-567-4811 <br/>  164 Torbay Rd, Markham, ON L3R 1G6, Canada"
        }
      ],
      stats: [
        ["Single Bottles <br/>  500mL & 32oz", "$12.99 & $19.99"],
        ["Four Gallon <br/>  Case of Gel", "$325"],
        ["Wall Mount <br/>  Dispenser", "$75"],
        ["Metal Stand<br/>  (4.5 ft)", "$145"]
      ]
    };
  },

  methods: {
    setLoaded() {
      window.paypal
        .Buttons({
          style: {
            shape: "pill",
            color: "silver",
            layout: "vertical",
            label: "pay"
          },
          createOrder: function(data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "1"
                  }
                }
              ]
            });
          },
          onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
              alert(
                "Transaction completed by " +
                  details.payer.name.given_name +
                  "!"
              );
            });
          }
        })
        .render(this.$refs.paypalButton);
    },
    sendEmail() {
      this.setTemplate();
      emailjs
        .send(
          "default_service",
          "template_e5G0Xaq6",
          this.template_params,
          "user_2VhHgP2YBwBzo9HUU1b8B"
        )
        .then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
            alert("Thanks, We will resond shortly");
            this.clearform();
          },
          error => {
            console.log("FAILED...", error);
            alert("Message failed - please try again");
          }
        );
    },

    setTemplate() {
      this.template_params.message_html = this.message;
      this.template_params.reply_to = this.email;
      this.template_params.from_name = this.name;
    },
    clearform() {
      this.name = "";
      this.email = "";
      this.name = "";
    }
  },
  mounted() {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=sb&currency=USD";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  watch: {
    viewPortSmall() {
      if (this.viewPortSmall === false) {
        this.drawer = false;
      }
    }
  },

  computed: {}
};
</script>




