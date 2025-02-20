<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="bg-primary py-16">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" class="text-white">
            <h1 class="text-h2 font-weight-bold mb-4">
              Experiential Marketing
            </h1>
            <p class="text-h6">
              Creating meaningful, hands-on experiences for consumers rather than relying on traditional marketing methods.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Main Content -->
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" md="8">
          <p class="text-body-1 mb-6">
            This approach allows brands to connect with customers through engaging tactics such as pop-up stores, interactive displays, educational demonstrations, and immersive personal interactions.
          </p>
          <p class="text-body-1 mb-6">
            From large-scale events to sponsorship activations, experiential marketing campaigns are designed to build lasting relationships between consumers and brands, ultimately driving conversions.
          </p>
          <p class="text-body-1 mb-8">
            A successful experiential marketing campaign requires several key elements: a deep understanding of your audience, a strong promotional strategy, measurable objectives, and, most importantly, a memorable experience.
          </p>

          <h2 class="text-h4 font-weight-bold mb-6">6 Key Benefits of Experiential Marketing with Samplers Inc.:</h2>
          <v-list class="mb-8">
            <v-list-item>
              <template v-slot:prepend>
                <div class="text-h5 font-weight-bold text-primary mr-4">1</div>
              </template>
              <div>
                <v-list-item-title class="text-h6 text-wrap">Connection</v-list-item-title>
                <v-list-item-subtitle style="display: block; white-space: normal">Build meaningful relationships between consumers and brands.</v-list-item-subtitle>
              </div>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <div class="text-h5 font-weight-bold text-primary mr-4">2</div>
              </template>
              <div>
                <v-list-item-title class="text-h6 text-wrap">Differentiation</v-list-item-title>
                <v-list-item-subtitle style="display: block; white-space: normal">Stand out in a crowded market with unique experiences.</v-list-item-subtitle>
              </div>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <div class="text-h5 font-weight-bold text-primary mr-4">3</div>
              </template>
              <div>
                <v-list-item-title class="text-h6 text-wrap">Personalization</v-list-item-title>
                <v-list-item-subtitle style="display: block; white-space: normal">Create tailored interactions that resonate with your audience.</v-list-item-subtitle>
              </div>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <div class="text-h5 font-weight-bold text-primary mr-4">4</div>
              </template>
              <div>
                <v-list-item-title class="text-h6 text-wrap">Engagement</v-list-item-title>
                <v-list-item-subtitle style="display: block; white-space: normal">Foster active participation and brand interaction.</v-list-item-subtitle>
              </div>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <div class="text-h5 font-weight-bold text-primary mr-4">5</div>
              </template>
              <div>
                <v-list-item-title class="text-h6 text-wrap">Insights</v-list-item-title>
                <v-list-item-subtitle style="display: block; white-space: normal">Gather valuable consumer data and behavioral insights.</v-list-item-subtitle>
              </div>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <div class="text-h5 font-weight-bold text-primary mr-4">6</div>
              </template>
              <div>
                <v-list-item-title class="text-h6 text-wrap">Lead Generation</v-list-item-title>
                <v-list-item-subtitle style="display: block; white-space: normal">Drive interest and conversions through direct consumer engagement.</v-list-item-subtitle>
              </div>
            </v-list-item>
          </v-list>

          <p class="text-h5 font-weight-bold mb-8">
            Our team at Samplers Inc. is ready to bring your brand's vision to life through impactful experiential marketing strategies. Let's create something unforgettable!
          </p>

          <div class="text-center">
            <v-btn
              color="primary"
              size="large"
              to="/contact"
            >
              Contact Us
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- Image Gallery -->
      <v-row class="mt-16">
        <v-col cols="12">
          <h2 class="text-h4 font-weight-bold mb-6">Featured Experiences</h2>
        </v-col>
        <v-col v-for="(image, index) in experientialImages" :key="index" cols="12" sm="6" md="4" lg="3">
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
  name: 'ExperientialMarketing',
  data: () => ({
    experientialImages: [
      { src: withBase('/images/experiential/exp1.jpg'), alt: 'Experiential Marketing Example 1' },
      { src: withBase('/images/experiential/exp2.jpg'), alt: 'Experiential Marketing Example 2' },
      { src: withBase('/images/experiential/exp3.jpg'), alt: 'Experiential Marketing Example 3' },
      { src: withBase('/images/experiential/exp4.jpg'), alt: 'Experiential Marketing Example 4' },
      { src: withBase('/images/experiential/exp5.jpg'), alt: 'Experiential Marketing Example 5' },
      { src: withBase('/images/experiential/exp6.jpg'), alt: 'Experiential Marketing Example 6' },
      { src: withBase('/images/experiential/exp7.jpg'), alt: 'Experiential Marketing Example 7' },
      { src: withBase('/images/experiential/exp8.jpg'), alt: 'Experiential Marketing Example 8' },
      { src: withBase('/images/experiential/exp9.jpg'), alt: 'Experiential Marketing Example 9' },
      { src: withBase('/images/experiential/exp10.png'), alt: 'Experiential Marketing Example 10' }
    ]
  })
}
</script> 