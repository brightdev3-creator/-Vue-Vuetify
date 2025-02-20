<template>
  <v-row class="text-center mb-12">
    <v-col cols="12" :md="narrow ? 8 : 12" class="mx-auto">
      <h2 class="text-h3 font-weight-bold mb-4">{{ title }}</h2>
      <p v-if="subtitle" class="text-h6">{{ subtitle }}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    narrow: {
      type: Boolean,
      default: false
    }
  }
}
</script> 