<template>
  <div>
    <v-row no-gutters>
      <v-img src="@/assets/logos/colorLogoNoBack.png">
        <v-container fill-height>
          <v-row align="center" class="blue--text mx-auto" justify="center">
            <v-col class="text-center" cols="12" tag="h1" style="margin-bottom: 25px;">
              <br />
              <span
                :class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']"
                class="font-weight-medium white--text"
              >THANK YOU</span>
              <br />

              <span
                :class="[$vuetify.breakpoint.smAndDown ? 'title	': 'display-1']"
                class="font-weight-black blue--text"
              >FOR YOUR ORDER</span>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>