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
    <v-container fluid id="services" class=" pa-0">
     

    
      <div class="cool-section">
    <v-row justify="center" align="center" class="fill-height pt-12">
      <v-col cols="12" class="text-center mb-10">
        <h1 class="text-h3 font-weight-bold gradient-text">
          Comprehensive Marketing Services
        </h1>
        <p class="text-subtitle-1 grey--text text--lighten-1">
          End-to-end promotional marketing solutions for modern brands
        </p>
      </v-col>
      <v-col cols="12" md="10">
        <v-row justify="center" align="stretch" class="mx-4">
          <!-- Strategic Planning Card -->
          <v-col cols="12" sm="4" class="pa-4">
            <v-card
              class="service-card elevation-5 pa-6"
              rounded="xl"
              @mouseover="hover = 'strategic'"
              @mouseleave="hover = ''"
            >
              <v-icon
                size="50"
                :color="hover === 'strategic' ? 'blue-accent-4' : 'blue darken-2'"
                class="mb-4"
                v-if="hover === 'strategic'"
              >
                mdi-lightbulb-on
              </v-icon>
              <v-icon
                size="50"
                color="blue darken-2"
                class="mb-4"
                v-else
              >
                mdi-lightbulb-on
              </v-icon>
              <h2 class="text-h5 font-weight-bold blue--text text--darken-2 mb-2">
                Strategic Planning
              </h2>
              <p class="text-body-2 grey--text text--darken-1">
                Comprehensive promotional marketing strategies aligned with your brand objectives.
              </p>
            </v-card>
          </v-col>

          <!-- Creative Services Card -->
          <v-col cols="12" sm="4" class="pa-4">
            <v-card
              class="service-card elevation-5 pa-6"
              rounded="xl"
              @mouseover="hover = 'creative'"
              @mouseleave="hover = ''"
            >
              <v-icon
                size="50"
                :color="hover === 'creative' ? 'purple-accent-4' : 'purple darken-2'"
                class="mb-4"
                v-if="hover === 'creative'"
              >
                mdi-brush
              </v-icon>
              <v-icon
                size="50"
                color="purple darken-2"
                class="mb-4"
                v-else
              >
                mdi-brush
              </v-icon>
              <h2 class="text-h5 font-weight-bold purple--text text--darken-2 mb-2">
                Creative Services
              </h2>
              <p class="text-body-2 grey--text text--darken-1">
                Custom program design, creative development, and brand storytelling.
              </p>
            </v-card>
          </v-col>

          <!-- Program Management Card -->
          <v-col cols="12" sm="4" class="pa-4">
            <v-card
              class="service-card elevation-5 pa-6"
              rounded="xl"
              @mouseover="hover = 'program'"
              @mouseleave="hover = ''"
            >
              <v-icon
                size="50"
                :color="hover === 'program' ? 'teal-accent-4' : 'teal darken-2'"
                class="mb-4"
                v-if="hover === 'program'"
              >
                mdi-cog
              </v-icon>
              <v-icon
                size="50"
                color="teal darken-2"
                class="mb-4"
                v-else
              >
                mdi-cog
              </v-icon>
              <h2 class="text-h5 font-weight-bold teal--text text--darken-2 mb-2">
                Program Management
              </h2>
              <p class="text-body-2 grey--text text--darken-1">
                Full-service execution including staffing, logistics, and operational excellence.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
 

      <!-- <v-row>
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
      </v-row> -->
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
    <!-- <v-container class="py-12">
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
    </v-container> -->

    <v-container fluid class="cool-cta-section">
    <v-row justify="center" align="center" class="fill-height pt-10">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="text-h2 font-weight-bold gradient-text mb-4">
          Ready to Grow Your Brand?
        </h1>
        <p class="text-subtitle-1 grey--text text--lighten-1 mb-6">
          Let’s discuss how we can help you reach your goals
        </p>
        <v-btn
          color="blue-accent-4"
          dark
          rounded
          x-large
          class="elevation-6"
          @mouseover="hover = true"
          @mouseleave="hover = false"
          :elevation="hover ? 12 : 6"
          @click="handleClick"
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
    hover: '',
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


.cool-section {
  background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
  min-height: 80vh;
  padding: 0;
}

.service-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  transform: scale(1);
}

.service-card:hover {
  transform: scale(1.05);
  elevation: 10;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.gradient-text {
  background: linear-gradient(45deg, #0288d1, #8e24aa);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Icon animation on hover */
.v-icon {
  transition: all 0.3s ease;
}

.service-card:hover .v-icon {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.cool-cta-section {
  background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
  min-height: 40vh;
  padding: 0;
}

.gradient-text {
  background: linear-gradient(45deg, #4a90e2, #50c878);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.v-btn {
  transition: all 0.3s ease;
}

.v-btn:hover {
  transform: scale(1.05);
  background: linear-gradient(45deg, #4a90e2, #50c878);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.v-btn:active {
  transform: scale(0.98);
}
</style> 