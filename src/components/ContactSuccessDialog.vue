<template>
  <v-dialog v-model="show" max-width="500">
    <v-card>
      <v-card-item>
        <v-card-title class="text-h5">
          <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
          Message Sent Successfully
        </v-card-title>
        <v-card-text class="mt-4">
          Thank you for contacting us. Our team will get back to you shortly.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="show = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card-item>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ContactSuccessDialog',
  props: {
    modelValue: Boolean
  },
  computed: {
    show: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script> 