<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="bg-primary py-16">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" class="text-white">
            <h1 class="text-h2 font-weight-bold mb-4">
              Event Staffing
            </h1>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Main Content -->
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" md="8">
          <p class="text-h6 mb-6">
            For over 30 years, Samplers Inc. has been a trusted leader in event staffing, providing top-tier event specialists, product ambassadors, costume characters, and wine sommeliers to bring brands to life.
          </p>
          <p class="text-body-1 mb-8">
            From retail activations and sporting events to festivals, nightclubs, restaurants, and trade shows, our experienced team delivers high-quality execution nationwide.
          </p>

          <h2 class="text-h4 font-weight-bold mb-6">Our comprehensive event staffing solutions include:</h2>
          <v-list class="mb-8">
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-check-circle</v-icon>
              </template>
              <v-list-item-title class="text-wrap">Expertly trained staff tailored to your brand's needs</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-check-circle</v-icon>
              </template>
              <v-list-item-title class="text-wrap">End-to-end workforce management for seamless execution</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-check-circle</v-icon>
              </template>
              <v-list-item-title class="text-wrap">Real-time reporting & inventory management for measurable results</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-check-circle</v-icon>
              </template>
              <v-list-item-title class="text-wrap">Fulfillment & collateral services to support every activation</v-list-item-title>
            </v-list-item>
          </v-list>

          <p class="text-body-1 mb-6">
            With a focus on quality, accountability, and results, Samplers Inc. ensures your brand makes a lasting impact—wherever your audience is.
          </p>
          
          <p class="text-h5 font-weight-bold mb-8">
            Let's make your next event a success!
          </p>

          <!-- Center the button using a text-center div -->
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
          <h2 class="text-h4 font-weight-bold mb-6">Featured Events</h2>
        </v-col>
        <v-col v-for="(image, index) in eventImages" :key="index" cols="12" sm="6" md="3">
          <v-card class="mx-auto">
            <v-img
              :src="image.src"
              :alt="image.alt"
              height="200"
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
  name: 'EventStaffing',
  data: () => ({
    eventImages: [
      {
        src: withBase('/images/events/event1.jpg'),
        alt: 'Event 1 description'
      },
      {
        src: withBase('/images/events/event2.jpg'),
        alt: 'Event 2 description'
      },
      {
        src: withBase('/images/events/event3.jpg'),
        alt: 'Event 3 description'
      },
      {
        src: withBase('/images/events/event4.jpg'),
        alt: 'Event 4 description'
      }
    ]
  })
}
</script> 