<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn x-small color="blue" dark v-on="on">More Info</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">{{product}}</v-card-title>
        <v-card-text>{{info}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Back</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>



<script>
export default {
  data() {
    return {
      dialog: false
    };
  },
  props: {
    product: { type: String },
    info: { type: String }
  }
};
</script>

