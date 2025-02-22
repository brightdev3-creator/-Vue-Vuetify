<template>
  <router-link to="/" class="d-flex align-center text-decoration-none">
    <v-img
      :src="withBase('/images/blue-logo.png')"
      alt="Samplers Inc"
      width="172"
      height="60"
      contain
    />
  </router-link>
</template>

<script>
export default {
  methods: {
    withBase(path) {
      return import.meta.env.BASE_URL + path.replace(/^\//, '')
    }
  }
}
</script>

<style scoped>
.logo-wrapper {
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
}

.logo-image {
  /* This will make the white logo appear in primary color */
  filter: invert(31%) sepia(97%) saturate(1029%) hue-rotate(199deg) brightness(97%) contrast(98%);
}
</style> 