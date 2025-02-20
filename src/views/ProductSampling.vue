<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="bg-primary py-16">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" class="text-white">
            <h1 class="text-h2 font-weight-bold mb-4">
              Product Sampling
            </h1>
            <p class="text-h6">
              Turn product trials into loyal customers with expertly executed sampling programs from Samplers Inc.
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
            Studies show that 70% of consumers who sample a product are more likely to purchase it—let's make that impact work for you.
          </p>

          <p class="text-body-1 mb-8">
            With decades of experience in CPG, adult beverages, electronics, health & beauty, and pet care, we design data-driven sampling programs tailored to your brand's goals.
          </p>

          <h2 class="text-h4 font-weight-bold mb-6">Why Choose Samplers Inc.?</h2>
          <v-list class="mb-8">
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-check-circle</v-icon>
              </template>
              <v-list-item-title class="text-wrap">Proven expertise in consumer engagement & product education</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-check-circle</v-icon>
              </template>
              <v-list-item-title class="text-wrap">Operational excellence—flawless execution from start to finish</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-check-circle</v-icon>
              </template>
              <v-list-item-title class="text-wrap">Compliance specialists—ensuring regulated product sampling meets all federal, state & local requirements</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-check-circle</v-icon>
              </template>
              <v-list-item-title class="text-wrap">Insights-driven strategies—built on industry trends & consumer behavior</v-list-item-title>
            </v-list-item>
          </v-list>

          <p class="text-h6 mb-8">
            Whether in-store, at events, or through direct-to-consumer channels, our sampling programs accelerate sales cycles and create lasting brand connections.
          </p>

          <div class="text-center">
            <v-btn
              color="primary"
              size="large"
              to="/contact"
            >
              <span class="d-none d-sm-block">
                Ready to boost conversions with sampling?
              </span>
              <span class="d-block d-sm-none">
                Ready to boost?
              </span>
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- Image Gallery -->
      <v-row class="mt-16">
        <v-col cols="12">
          <h2 class="text-h4 font-weight-bold mb-6">Featured Sampling Programs</h2>
        </v-col>
        <v-col v-for="(image, index) in samplingImages" :key="index" cols="12" sm="6" md="4" lg="3">
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
  name: 'ProductSampling',
  data: () => ({
    samplingImages: [
      { src: withBase('/images/sampling/sampling1.jpg'), alt: 'Product Sampling Example 1' },
      { src: withBase('/images/sampling/sampling2.jpg'), alt: 'Product Sampling Example 2' },
      { src: withBase('/images/sampling/sampling3.jpg'), alt: 'Product Sampling Example 3' },
      { src: withBase('/images/sampling/sampling4.jpg'), alt: 'Product Sampling Example 4' },
      { src: withBase('/images/sampling/sampling5.jpg'), alt: 'Product Sampling Example 5' },
      { src: withBase('/images/sampling/sampling6.jpg'), alt: 'Product Sampling Example 6' },
      { src: withBase('/images/sampling/sampling7.jpg'), alt: 'Product Sampling Example 7' },
      { src: withBase('/images/sampling/sampling8.jpg'), alt: 'Product Sampling Example 8' },
      { src: withBase('/images/sampling/sampling9.jpg'), alt: 'Product Sampling Example 9' },
      { src: withBase('/images/sampling/sampling10.jpg'), alt: 'Product Sampling Example 10' },
      { src: withBase('/images/sampling/sampling11.png'), alt: 'Product Sampling Example 11' }
    ]
  })
}
</script> 