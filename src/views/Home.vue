<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="hero pa-0">
      <v-row no-gutters>
        <v-col cols="12">
          <div class="hero-wrapper">
            <v-img
              :src="withBase('/images/hero-image.jpg')"
              height="600"
              cover
            />
            <div class="hero-content d-flex flex-column fill-height justify-center align-center text-white text-center">
              <h1 class="text-h4 font-weight-bold mb-4">
                Full-Service Promotional Marketing Solutions
              </h1>
              <p class="text-h6 mb-8">
                Delivering turnkey marketing programs from concept to execution
              </p>
              <v-btn
                x-large
                color="primary"
                class="text-none"
                href="#services"
              >
                Learn More
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    

    <!-- Services Section -->
    <v-container id="services" class="py-12">
      <v-row class="text-center mb-12">
        <v-col cols="12">
          <h2 class="text-h5 font-weight-bold mb-4">Comprehensive Marketing Services</h2>
          <p class="text-body-1">End-to-end promotional marketing solutions for modern brands</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="service in services"
          :key="service.title"
          cols="12"
          md="4"
        >
          <v-card
            class="mx-auto"
            height="100%"
          >
            <v-card-item>
              
              <v-card-title class="text-h6 mb-3">
                <v-icon
                size="48"
                color="primary"
                class="mb-4"
              >
                {{ service.icon }}
              </v-icon> {{ service.title }}
              </v-card-title>
              <v-card-text>
                {{ service.description }}
              </v-card-text>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Stats Section -->
    <v-container fluid class="bg-grey-lighten-4 py-12">
      <v-container>
        <v-row>
          <v-col
            v-for="stat in stats"
            :key="stat.value"
            cols="12"
            md="3"
            class="text-center"
          >
            <h3 class="text-h3 font-weight-bold primary--text mb-2">
              {{ stat.value }}
            </h3>
            <p class="text-h6">{{ stat.label }}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- CTA Section -->
    <v-container class="py-12">
      <v-row align="center" justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h2 class="text-h3 font-weight-bold mb-4">
            Ready to Grow Your Brand?
          </h2>
          <p class="text-h6 mb-8">
            Let's discuss how we can help you reach your goals
          </p>
          <v-btn
            x-large
            color="primary"
            class="text-none"
            to="/contact"
          >
            Contact Us Today
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { IMAGES, PLACEHOLDER_COLORS } from '@/constants/images'
import PlaceholderImage from '@/components/PlaceholderImage.vue'
import { withBase } from '@/utils/paths'

export default {
  name: 'Home',
  components: {
    PlaceholderImage
  },
  data: () => ({
    images: IMAGES,
    colors: PLACEHOLDER_COLORS,
    services: [
      {
        icon: 'mdi-lightbulb',
        title: 'Strategic Planning',
        description: 'Comprehensive promotional marketing strategies aligned with your brand objectives.'
      },
      {
        icon: 'mdi-creation',
        title: 'Creative Services',
        description: 'Custom program design, creative development, and brand storytelling.'
      },
      {
        icon: 'mdi-cog-sync',
        title: 'Program Management',
        description: 'Full-service execution including staffing, logistics, and operational excellence.'
      }
    ],
    stats: [
      { value: '1M+', label: 'Consumer Interactions' },
      { value: '50K+', label: 'Events Completed' },
      { value: '1000+', label: 'Brand Partners' },
      { value: '25+', label: 'Years Experience' }
    ]
  }),
  methods: {
    withBase
  }
}
</script>

<style scoped>
.hero-wrapper {
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

html {
  scroll-behavior: smooth;
}

#services {
  scroll-margin-top: 60px; /* Adjust this value to match your fixed top menu's height */
}
</style> 