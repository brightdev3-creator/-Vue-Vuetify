<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="bg-primary py-16">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" class="text-white">
            <h1 class="text-h2 font-weight-bold mb-4">
              Retail In-Store Sampling
            </h1>
            <p class="text-h6">
              Drive sales and build brand loyalty with engaging, high-impact in-store sampling programs from Samplers Inc.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Main Content -->
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" md="8">
          <p class="text-body-1 mb-8">
            Our product trials and experiential activations connect with shoppers at the point of purchase, creating memorable experiences that translate into real results.
          </p>

          <h2 class="text-h4 font-weight-bold mb-6">We provide:</h2>
          <v-list class="mb-8">
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary" class="mt-2">mdi-check-circle</v-icon>
              </template>
              <v-list-item-title class="text-wrap">Expert brand ambassadors trained to educate and engage</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary" class="mt-2">mdi-check-circle</v-icon>
              </template>
              <v-list-item-title class="text-wrap">Full-service execution, including all necessary equipment</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary" class="mt-2">mdi-check-circle</v-icon>
              </template>
              <v-list-item-title class="text-wrap">Robust reporting & technology to track sales and measure success</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary" class="mt-2">mdi-check-circle</v-icon>
              </template>
              <v-list-item-title class="text-wrap">Omnichannel reach—engaging shoppers in-store, via pickup, and through delivery</v-list-item-title>
            </v-list-item>
          </v-list>

          <h2 class="text-h4 font-weight-bold mb-6">Retail Sampling Capabilities:</h2>
          <v-list class="mb-8">
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary" class="mt-2">mdi-check</v-icon>
              </template>
              <v-list-item-title class="text-wrap">Adult Beverage Tastings</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary" class="mt-2">mdi-check</v-icon>
              </template>
              <v-list-item-title class="text-wrap">New Item Launches</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary" class="mt-2">mdi-check</v-icon>
              </template>
              <v-list-item-title class="text-wrap">CPG & General Merchandise Sampling</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary" class="mt-2">mdi-check</v-icon>
              </template>
              <v-list-item-title class="text-wrap">Electronics Demonstrations</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary" class="mt-2">mdi-check</v-icon>
              </template>
              <v-list-item-title class="text-wrap">Health & Beauty Activations</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary" class="mt-2">mdi-check</v-icon>
              </template>
              <v-list-item-title class="text-wrap">Lawn & Garden Showcases</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary" class="mt-2">mdi-check</v-icon>
              </template>
              <v-list-item-title class="text-wrap">Pet Care Promotions</v-list-item-title>
            </v-list-item>
          </v-list>

          <p class="text-h5 font-weight-bold mb-8">
            Take your in-store experience to the next level!
          </p>
          <div class="text-center">
            <v-btn
              color="primary"
              size="large"
              to="/contact"
            >
              Get Started
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- Image Gallery -->
      <v-row class="mt-16">
        <v-col cols="12">
          <h2 class="text-h4 font-weight-bold mb-6">Featured Retail Programs</h2>
        </v-col>
        <v-col v-for="(image, index) in retailImages" :key="index" cols="12" sm="6" md="4" lg="3">
          <v-card class="mx-auto">
            <v-img
              :src="image.src"
              :alt="image.alt"
              height="250"
              cover
              class="bg-grey-lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="primary"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { withBase } from '@/utils/paths';

export default {
  name: 'RetailDemo',
  data: () => ({
    retailImages: [
      { src: withBase('/images/retail/retail1.jpg'), alt: 'Retail Demo Example 1' },
      { src: withBase('/images/retail/retail2.jpg'), alt: 'Retail Demo Example 2' },
      { src: withBase('/images/retail/retail3.jpg'), alt: 'Retail Demo Example 3' },
      { src: withBase('/images/retail/retail4.jpg'), alt: 'Retail Demo Example 4' },
      { src: withBase('/images/retail/retail5.jpg'), alt: 'Retail Demo Example 5' },
      { src: withBase('/images/retail/retail6.jpg'), alt: 'Retail Demo Example 6' },
      { src: withBase('/images/retail/retail7.jpg'), alt: 'Retail Demo Example 7' },
      { src: withBase('/images/retail/retail8.jpg'), alt: 'Retail Demo Example 8' },
      { src: withBase('/images/retail/retail9.jpg'), alt: 'Retail Demo Example 9' },
      { src: withBase('/images/retail/retail10.jpg'), alt: 'Retail Demo Example 10' },
      { src: withBase('/images/retail/retail11.jpg'), alt: 'Retail Demo Example 11' },
      { src: withBase('/images/retail/retail12.jpg'), alt: 'Retail Demo Example 12' }
    ]
  })
}
</script> 