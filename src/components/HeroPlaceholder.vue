<template>
  <div class="hero-placeholder">
    <PlaceholderImage 
      :height="height"
      :bgColor="bgColor"
    />
    <div class="hero-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import PlaceholderImage from './PlaceholderImage.vue'

export default {
  name: 'HeroPlaceholder',
  components: {
    PlaceholderImage
  },
  props: {
    height: {
      type: Number,
      required: true,
      validator: value => value > 0
    },
    bgColor: {
      type: String,
      default: '#1867C0'
    }
  }
}
</script>

<style scoped>
.hero-placeholder {
  position: relative;
}

.hero-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
}
</style> 