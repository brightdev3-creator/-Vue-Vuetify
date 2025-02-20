<template>
  <v-container :fluid="fluid" :class="bgClass">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h2 class="text-h3 font-weight-bold mb-4">
            {{ title }}
          </h2>
          <p class="text-h6 mb-8">
            {{ subtitle }}
          </p>
          <v-btn
            :color="buttonColor"
            size="x-large"
            class="text-none"
            :to="buttonLink"
          >
            {{ buttonText }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'CtaSection',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      default: 'Contact Us'
    },
    buttonColor: {
      type: String,
      default: 'primary'
    },
    buttonLink: {
      type: String,
      default: '/contact'
    },
    fluid: {
      type: Boolean,
      default: true
    },
    bgClass: {
      type: String,
      default: 'bg-grey-lighten-4 py-16'
    }
  }
}
</script> 