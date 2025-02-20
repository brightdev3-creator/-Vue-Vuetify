<template>
  <div 
    class="placeholder-image"
    :style="{
      backgroundColor: bgColor,
      height: height + 'px'
    }"
  >
    <v-icon
      size="48"
      color="grey-lighten-1"
    >
      mdi-image
    </v-icon>
  </div>
</template>

<script>
export default {
  name: 'PlaceholderImage',
  props: {
    height: {
      type: Number,
      required: true,
      validator: value => value > 0
    },
    bgColor: {
      type: String,
      default: '#f5f5f5'
    }
  }
}
</script>

<style scoped>
.placeholder-image {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}
</style> 