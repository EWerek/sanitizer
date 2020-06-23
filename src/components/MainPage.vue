<template>
  <div id="app">
    <v-app>
      <HeaderSidebar />
      <v-content style="padding-left: 0px; padding-top: 0px; padding-right: 0px;">
        <section id="home">
          <Home />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="features" class="grey lighten-3">
          <Features />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="Available">
          <Available />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </v-content>
      <PageFooter />
    </v-app>
  </div>
</template>

<script>
import About from "./About";
import HeaderSidebar from "./HeaderSidebar";
import Home from "./Home";
import Available from "./Available";
import Products from "./Products";
import Features from "./Features";
import Contact from "./Contact";
import PageFooter from "./PageFooter";

export default {
  name: "SanitizerKing",
  components: {
    About,
    HeaderSidebar,
    Home,
    Available,
    Products,
    Features,
    Contact,
    PageFooter
  },
  data() {
    return {};
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
                    value: "12.99"
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
    }
  },
  mounted() {
    // const script = document.createElement("script");
    // script.src = "https://www.paypal.com/sdk/js?client-id=sb&currency=USD";
    // script.addEventListener("load", this.setLoaded);
    // document.body.appendChild(script);
  },

  computed: {}
};
</script>




