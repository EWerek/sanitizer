<template>
  <div>
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
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "contact",
  data() {
    return {
      message: "",
      email: "",
      name: "",
      template_params: {
        reply_to: "",
        from_name: "",
        to_name: "",
        message_html: ""
      }
    };
  },
  methods: {
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
  }
};
</script>

<style>
</style>