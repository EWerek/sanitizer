<template>
  <div id="app">
    <v-app>
      <v-app-bar app color="white" height="100">
        <v-avatar class="mr-3" color="grey lighten-5" size="70">
          <v-icon>{{ svgPath }}</v-icon>
        </v-avatar>

        <v-toolbar-title class="font-weight-black headline">EMS</v-toolbar-title>
      </v-app-bar>

      <v-content>
        <section id="hero">
          <v-row no-gutters>
            <v-img
              :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
              src="https://source.unsplash.com/-JcraKNNnQQ/1920x1280"
            >
              <v-theme-provider dark>
                <v-container fill-height>
                  <v-row align="center" class="white--text mx-auto" justify="center">
                    <v-col class="white--text text-center" cols="12" tag="h1">
                      <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                        class="font-weight-light"
                      >EMS</span>

                      <br />

                      <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                        class="font-weight-black"
                      >HAND SANITIZERS</span>
                    </v-col>

                    <v-btn class="align-self-end" fab outlined @click="$vuetify.goTo('#about-me')">
                      <v-icon>mdi-chevron-double-down</v-icon>
                    </v-btn>
                  </v-row>
                </v-container>
              </v-theme-provider>
            </v-img>
          </v-row>
        </section>

        <section id="about-me">
          <div class="py-12"></div>

          <v-container class="text-center">
            <h2
              :class="[$vuetify.breakpoint.smAndDown ? 'body-2' : 'headline']"
              class="blue-grey lighten-3 --text display-1 font-weight-bold mb-3"
            >Executive Maintenance Services</h2>
            <p
              :class="[$vuetify.breakpoint.smAndDown ? 'body-1' : 'title']"
            >We are a family-run company that has been in the cleaning supply business for over 40 years. During these chaotic times we have locally produced sanitizer gel to help in the fight against the Corona Virus. The sanitizer is NPN and CFIA certified and comes in cases of four 1 gallon bottles. We have automatic refillable dispensers available which hold 800 mL of gel. They are easily wall-mounted with tape so that there is no damage to the walls or alternatively they can be fastened with screws. We also have metal stands available for an additional cost.</p>

            <v-responsive class="mx-auto mb-8" width="56">
              <v-divider class="mb-1"></v-divider>
            </v-responsive>

            <v-responsive class="mx-auto title font-weight-light mb-8" max-width="720">AVAILABLE</v-responsive>

            <v-parallax
              :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
              src="https://source.unsplash.com/E5GIqru4dwA/1920x2880"
            >
              <v-container fill-height>
                <v-row class="mx-auto">
                  <v-col v-for="[value, title] of stats" :key="title" cols="12" md="4">
                    <div class="text-center">
                      <div class="display-1 font-weight-black mb-4" v-html="value"></div>

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

        <section id="stats">
          <v-parallax
            :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
            src="https://source.unsplash.com/s0grRYEDaL4/1920x852"
          ></v-parallax>
        </section>

        <section id="blog">
          <div class="py-12"></div>

          <v-container>
            <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">PRODUCTS</h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-row>
              <v-col v-for="({ src, text, title }, i) in articles" :key="i" cols="12" md="4">
                <v-img :src="src" class="mb-4" height="275" max-width="100%"></v-img>

                <h3 class="font-weight-black mb-4 text-uppercase" v-text="title"></h3>

                <div class="title font-weight-light mb-5" v-text="text"></div>
              </v-col>
            </v-row>
          </v-container>

          <div class="py-12"></div>
        </section>

        <v-sheet id="contact" color="#333333" dark tag="section" tile>
          <div class="py-12"></div>

          <v-container>
            <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Contact Me</h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-theme-provider light>
              <v-row>
                <v-col cols="12">
                  <v-text-field flat label="Name*" solo></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field flat label="Email*" solo></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field flat label="Subject*" solo></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-textarea flat label="Message*" solo></v-textarea>
                </v-col>

                <v-col class="mx-auto" cols="auto">
                  <v-btn color="accent" x-large>Submit</v-btn>
                </v-col>
              </v-row>
            </v-theme-provider>
          </v-container>

          <div class="py-12"></div>
        </v-sheet>
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
export default {
  name: "HelloWorld",
  data() {
    return {
      svgPath: mdiBottleTonicPlus,
      articles: [
        {
          src: "https://source.unsplash.com/xzI3xGoQu34/1920x1302",
          title: "",
          text: "GEL"
        },
        {
          src: "https://source.unsplash.com/LiPIUvzwekw/1920x2560",
          title: "",
          text: "DISPENSER"
        },
        {
          src: "https://source.unsplash.com/vDs7KenVpw0/1920x2560",
          title: "",
          text: "STAND"
        }
      ],
      features: [
        {
          icon: "mdi-virus",
          title: "Kills Pathogens",
          text:
            "Contains 70% alcohol The use of hand sanitisers has been proven to reduce the risk of pathogens and cross contamination. Our Hand Sanitiser is effective against coronavirus"
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
        ["Four Gallon <br/>  Case of Gel", "$325"],
        ["Wall Mount <br/>  Dispenser", "$75"],
        ["Metal Stand<br/>  (4.5 ft)", "$145"]
      ]
    };
  }
};
</script>


