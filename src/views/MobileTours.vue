<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="bg-primary py-16">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" class="text-white">
            <h1 class="text-h2 font-weight-bold mb-4">
              Mobile Tours
            </h1>
            <p class="text-h6">
              Take your brand on the road with high-impact mobile tours from Samplers Inc.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Main Content -->
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" md="8">
          <p class="text-h6 mb-8">
            Our strategic activations bring your products directly to consumers—where they live, work, and play.
          </p>

          <p class="text-body-1 mb-6">
            With branded vehicles, interactive experiences, and live product demonstrations, mobile tours boost awareness, drive trial, and increase conversions at:
          </p>

          <v-list class="mb-8">
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-truck</v-icon>
              </template>
              <v-list-item-title class="text-h6 text-wrap">City-to-city activations</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-ferris-wheel</v-icon>
              </template>
              <v-list-item-title class="text-h6 text-wrap">Fairs & festivals</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-office-building</v-icon>
              </template>
              <v-list-item-title class="text-h6 text-wrap">Conventions & business events</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-stadium</v-icon>
              </template>
              <v-list-item-title class="text-h6 text-wrap">Sporting venues & public spaces</v-list-item-title>
            </v-list-item>
          </v-list>

          <h2 class="text-h4 font-weight-bold mb-6">Why Mobile Tours?</h2>
          <v-list class="mb-8">
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-check-circle</v-icon>
              </template>
              <v-list-item-title class="text-wrap">Expand brand reach beyond traditional retail</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-check-circle</v-icon>
              </template>
              <v-list-item-title class="text-wrap">Create immersive experiences that engage & excite</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-check-circle</v-icon>
              </template>
              <v-list-item-title class="text-wrap">Increase trial & conversion with hands-on product interactions</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-check-circle</v-icon>
              </template>
              <v-list-item-title class="text-wrap">Gain valuable market insights from direct consumer feedback</v-list-item-title>
            </v-list-item>
          </v-list>

          <p class="text-h5 font-weight-bold mb-8">
            We don't wait for consumers to find your brand—we take your brand to them.
          </p>

          <div class="text-center">
            <v-btn
              color="primary"
              size="large"
              to="/contact"
            >
              Start Planning
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- Image Gallery -->
      <v-row class="mt-16">
        <v-col cols="12">
          <h2 class="text-h4 font-weight-bold mb-6">Featured Mobile Tours</h2>
        </v-col>
        <v-col v-for="(image, index) in mobileImages" :key="index" cols="12" md="4">
          <FeatureCard :image="image" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { withBase } from '@/utils/paths';
import FeatureCard from '@/components/FeatureCard.vue';
import { components } from 'vuetify/dist/vuetify-labs.js';
export default {
  name: 'MobileTours',
  components  : {
    FeatureCard
  },
  data: () => ({
    mobileImages: [
      { src: withBase('/images/mobile/mobile1.jpg'), alt: 'Mobile Tour Example 1' },
      { src: withBase('/images/mobile/mobile2.jpg'), alt: 'Mobile Tour Example 2' },
      { src: withBase('/images/mobile/mobile3.jpg'), alt: 'Mobile Tour Example 3' }
    ]
  })
}
</script> 