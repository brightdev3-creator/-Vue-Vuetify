<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="bg-primary py-16">
      <v-img
        :src="withBase('/images/services-hero.jpg')"
        height="400"
        cover
        class="position-relative"
      >
        <v-container>
          <v-row>
            <v-col cols="12" md="8" class="text-white">
              <h1 class="text-h2 font-weight-bold mb-4">
                Full-Service Marketing Solutions
              </h1>
              <p class="text-h5">
                Comprehensive promotional marketing services from strategy through execution.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-container>

    <!-- Service Categories -->
    <v-container class="py-16">
      <v-row>
        <v-col v-for="category in serviceCategories" :key="category.title" cols="12" class="mb-16">
          <v-row align="center" :class="category.reverse ? 'flex-row-reverse' : ''">
            <v-col cols="12" md="6">
              <v-img
                :src="withBase(`/images/services/${category.image}`)"
                height="400"
                cover
              />
            </v-col>
            <v-col cols="12" md="6">
              <h2 class="text-h3 font-weight-bold mb-6">{{ category.title }}</h2>
              <p class="text-body-1 mb-6">{{ category.description }}</p>
              <v-list>
                <v-list-item v-for="service in category.services" :key="service.name">
                  <template v-slot:prepend>
                    <v-icon color="primary">{{ service.icon }}</v-icon>
                  </template>
                  <v-list-item-title class="font-weight-bold">{{ service.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ service.description }}</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- Call to Action -->
    <v-container fluid class="bg-grey-lighten-4 py-16">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="text-h3 font-weight-bold mb-4">Ready to Get Started?</h2>
            <p class="text-h6 mb-8">
              Let's discuss how our services can help you achieve your brand goals.
            </p>
            <v-btn
              color="primary"
              size="x-large"
              class="text-none"
            >
              Schedule a Consultation
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import { IMAGES, PLACEHOLDER_COLORS } from '@/constants/images'
import PlaceholderImage from '@/components/PlaceholderImage.vue'
import { withBase } from '@/utils/paths'

export default {
  name: 'Services',
  components: {
    PlaceholderImage
  },
  methods: {
    withBase
  },
  data: () => ({
    images: IMAGES,
    colors: PLACEHOLDER_COLORS,
    serviceCategories: [
      {
        title: 'Strategic Marketing Services',
        description: 'Comprehensive marketing strategy and planning to drive your brand forward.',
        image: IMAGES.SERVICES.BRAND_AMBASSADORS,
        reverse: false,
        services: [
          {
            icon: 'mdi-chart-timeline-variant',
            name: 'Campaign Strategy',
            description: 'Data-driven marketing strategy development and campaign planning'
          },
          {
            icon: 'mdi-target',
            name: 'Audience Targeting',
            description: 'Precise audience segmentation and targeting strategies'
          },
          {
            icon: 'mdi-finance',
            name: 'Budget Optimization',
            description: 'Strategic budget allocation and ROI planning'
          }
        ]
      },
      {
        title: 'Creative & Production',
        description: 'Full-service creative development and production to bring your brand vision to life.',
        image: IMAGES.SERVICES.EVENT_PRODUCTION,
        reverse: true,
        services: [
          {
            icon: 'mdi-palette-outline',
            name: 'Creative Development',
            description: 'Innovative creative concepts and campaign design'
          },
          {
            icon: 'mdi-movie-open',
            name: 'Content Production',
            description: 'High-quality content creation across all channels'
          },
          {
            icon: 'mdi-view-grid-plus',
            name: 'Asset Management',
            description: 'Comprehensive management of brand and campaign assets'
          }
        ]
      },
      {
        title: 'Program Management',
        description: 'End-to-end execution of marketing programs with proven operational excellence.',
        image: IMAGES.SERVICES.ANALYTICS,
        reverse: false,
        services: [
          {
            icon: 'mdi-cog-sync',
            name: 'Operations Management',
            description: 'Seamless coordination of all program components'
          },
          {
            icon: 'mdi-account-group',
            name: 'Field Team Management',
            description: 'Expert staffing and training for promotional programs'
          },
          {
            icon: 'mdi-clipboard-check',
            name: 'Quality Assurance',
            description: 'Rigorous quality control and program optimization'
          }
        ]
      }
    ]
  })
}
</script> 