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
              src="https://source.unsplash.com/KiRlN3jjVNU/1920X1280"
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
            <h2 class="display-2 font-weight-bold mb-3">SPECS</h2>

            <v-responsive class="mx-auto mb-8" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-responsive class="mx-auto title font-weight-light mb-8" max-width="720">SPECS HERE</v-responsive>

            <v-parallax
              :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
              src="https://source.unsplash.com/E5GIqru4dwA/1920x2880"
            ></v-parallax>
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

                  <v-card-text class="subtitle-1" v-text="text"></v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          <div class="py-12"></div>
        </section>

        <section id="stats">
          <v-parallax
            :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
            src="https://source.unsplash.com/yAXbfq1wI7I/1600x900"
          ></v-parallax>
        </section>

        <section id="blog">
          <div class="py-12"></div>

          <v-container>
            <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">ANYTHING ELSE</h2>

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
          src:
            "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          title: "HEY JAMBOY",
          text:
            "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum."
        },
        {
          src:
            "https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          title: "HEY JAMBOY",
          text:
            "Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh."
        },
        {
          src:
            "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80",
          title: "HEY JAMBOY",
          text:
            "Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget."
        }
      ],
      features: [
        {
          icon: "mdi-virus",
          title: "Kills Pathogens",
          text:
            "Contains 70% alcohol The use of hand sanitisers has been proven to reduce the risk of pathogens cross contamination. Our alcohol-based Initial Hand Sanitiser Gel rapidly acts against a broad spectrum of germs. It evaporates quickly to leave hands feeling fresh and is quick and convenient to use any time, anywhere. Our Hand Sanitiser is effective against coronavirus"
        },
        {
          icon: "mdi-tools",
          title: "Easy to Install",
          text:
            "Practical and hygienic. Easy to top up. Wall mounted. Viewing window to check stock level. Capacity - 1 litre. Dimensions - H 250mm x W 125mm x D 136mm.Weight (without consumable) - 950 grams.Material - ABS plastic"
        },
        {
          icon: "mdi-shield-outline",
          title: "Long-term Support",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        }
      ]
    };
  }
};
</script>


