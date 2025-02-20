<template>
  <div class="d-flex gap-2">
    <v-btn
      v-for="link in socialLinks"
      :key="link.icon"
      :icon="link.icon"
      :href="link.url"
      target="_blank"
      variant="text"
    ></v-btn>
  </div>
</template>

<script>
export default {
  name: 'SocialLinks',
  props: {
    size: {
      type: String,
      default: 'default'
    }
  },
  data: () => ({
    socialLinks: [
      { icon: 'mdi-facebook', url: 'https://facebook.com/samplersinc' },
      { icon: 'mdi-twitter', url: 'https://twitter.com/samplersinc' },
      { icon: 'mdi-instagram', url: 'https://instagram.com/samplersinc' },
      { icon: 'mdi-linkedin', url: 'https://linkedin.com/company/samplersinc' }
    ]
  })
}
</script> 