<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="bg-grey-lighten-4 py-16">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <h1 class="text-h2 font-weight-bold mb-4">
              About Samplers Inc
            </h1>
            <p class="text-h6">
              For over 30 years, we've been delivering innovative promotional marketing solutions that drive brand growth through authentic human connections.
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <v-img
              :src="images.ABOUT"
              height="400"
              cover
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Founder's Story -->
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" class="mb-8">
          <h2 class="text-h3 font-weight-bold mb-6">Our Founder's Story</h2>
          <div class="text-h5 mb-8">
            "This all began with throwing fights in bars to sell more beer. Hold on, let's back up a second."
          </div>
          <div class="text-body-1">
            <p class="mb-4">
              In the 90s, David Bellenoit was a struggling actor in Boston, hustling to make rent like so many others. Hustle culture was the name of the game, and the more you hustle, the more opportunities you created for yourself.
            </p>
            <p class="mb-4">
              One day, he auditioned for an ad that called for someone who could do a British accent. He landed the gig and soon found himself in bars and pubs around Boston performing a little piece of surprise "guerrilla theater" that would unknowingly become his entry into the world of experiential marketing.
            </p>
            <p class="mb-4">
              What started as "Hey Dave, can you do this?" became "Hey Dave's team" and, finally, an official business. Over the years, we've grown from small bar stunts to large-scale, multi-city brand activations, to multi-state in-store sampling demonstrations.
            </p>
            <p class="mb-4">
              Today, after 30 years, experiential marketing has changed. The tools are fancier, the data more precise, and the expectations higher. But the heart of it is still the same: face-to-face, human connection. That's what people crave. That's what we've spent our careers perfecting.
            </p>
          </div>
          <v-btn
            color="primary"
            size="large"
            class="mt-6"
            @click="showFullStory = true"
          >
            Read Full Story
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- Values Section -->
    <v-container fluid class="bg-grey-lighten-4 py-16">
      <v-container>
        <h2 class="text-h3 font-weight-bold mb-6">Our Values</h2>
        <v-row>
          <v-col v-for="value in values" :key="value.title" cols="12" md="6" lg="3">
            <v-card class="h-100">
              <v-card-item>
                <v-icon color="primary" size="48" class="mb-4">{{ value.icon }}</v-icon>
                <v-card-title class="text-h5">{{ value.title }}</v-card-title>
                <v-card-text>{{ value.description }}</v-card-text>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Full Story Dialog -->
    <v-dialog v-model="showFullStory" max-width="800">
      <v-card>
        <v-card-title class="text-h4 pa-6">
          David Bellenoit – Our Founder's Story
          <v-btn icon="mdi-close" variant="text" @click="showFullStory = false" class="float-right"></v-btn>
        </v-card-title>
        <v-card-text class="pa-6">
          <!-- Full story text here -->
          <p class="mb-4">This all began with throwing fights in bars to sell more beer. Hold on, let's back up a second.</p>
          <!-- Add the rest of the story paragraphs -->
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Mission & Values -->
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" md="6">
          <h2 class="text-h3 font-weight-bold mb-6">Our Mission</h2>
          <p class="text-h5 mb-8">
            To deliver comprehensive marketing solutions that transform brands and drive measurable business growth.
          </p>
          <p class="text-body-1">
            We believe in the power of integrated marketing programs to build brand value and drive consumer engagement. Our mission is to deliver exceptional promotional marketing solutions that create lasting impact and measurable results.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <h2 class="text-h3 font-weight-bold mb-6">Our Values</h2>
          <v-list>
            <v-list-item v-for="value in values" :key="value.title">
              <template v-slot:prepend>
                <v-icon color="primary" size="36">{{ value.icon }}</v-icon>
              </template>
              <v-list-item-title class="text-h6 mb-1">{{ value.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ value.description }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>

    <!-- Leadership Team -->
    <v-container fluid class="bg-grey-lighten-4 py-16">
      <v-container>
        <h2 class="text-h3 text-center font-weight-bold mb-12">Our Leadership Team</h2>
        <v-row>
          <v-col v-for="leader in leadership" :key="leader.name" cols="12" md="4">
            <v-card class="mx-auto" max-width="400">
              <v-img
                :src="withBase(leader.image)"
                height="300"
                cover
              />
              <v-card-item>
                <v-card-title class="text-h5">{{ leader.name }}</v-card-title>
                <v-card-subtitle>{{ leader.position }}</v-card-subtitle>
                <v-card-text>{{ leader.bio }}</v-card-text>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- History Timeline -->
    <v-container class="py-16">
      <h2 class="text-h3 text-center font-weight-bold mb-12">Our Journey</h2>
      <v-timeline side="end">
        <v-timeline-item
          v-for="milestone in timeline"
          :key="milestone.year"
          size="small"
          dot-color="primary"
        >
          <template v-slot:opposite>
            <div class="text-h4 font-weight-bold primary--text">{{ milestone.year }}</div>
          </template>
          <v-card>
            <v-card-title class="text-h6">{{ milestone.title }}</v-card-title>
            <v-card-text>{{ milestone.description }}</v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </div>
</template>

<script>
import { IMAGES, PLACEHOLDER_COLORS } from '@/constants/images'
import HeroPlaceholder from '@/components/HeroPlaceholder.vue'
import PlaceholderImage from '@/components/PlaceholderImage.vue'
import { withBase } from '@/utils/paths'

export default {
  name: 'About',
  components: {
    HeroPlaceholder,
    PlaceholderImage
  },
  methods: {
    withBase
  },
  data: () => ({
    showFullStory: false,
    images: IMAGES,
    colors: PLACEHOLDER_COLORS,
    values: [
      {
        icon: 'mdi-handshake',
        title: 'Trust',
        description: 'We build lasting relationships through trust with our clients, team members, and brand ambassadors.'
      },
      {
        icon: 'mdi-theater',
        title: 'Creativity',
        description: 'We bring brands to life through innovative and memorable experiences.'
      },
      {
        icon: 'mdi-account-group',
        title: 'Human Connection',
        description: 'We believe in the power of authentic, face-to-face interactions.'
      },
      {
        icon: 'mdi-target',
        title: 'Results',
        description: 'We deliver measurable impact through strategic execution.'
      }
    ],
    leadership: [
      {
        name: 'John Smith',
        position: 'Chief Executive Officer',
        image: '/images/team/ceo.jpg',
        bio: '20+ years of experience in strategic marketing and brand transformation.'
      },
      {
        name: 'Sarah Johnson',
        position: 'Chief Operations Officer',
        image: '/images/team/coo.jpg',
        bio: 'Expert in integrated marketing operations and program optimization.'
      },
      {
        name: 'Michael Chen',
        position: 'Chief Technology Officer',
        image: '/images/team/cto.jpg',
        bio: 'Leading our marketing technology and analytics innovation.'
      }
    ],
    timeline: [
      {
        year: '1998',
        title: 'Company Founded',
        description: 'Established as an innovative promotional marketing agency.'
      },
      {
        year: '2005',
        title: 'National Expansion',
        description: 'Expanded full-service marketing operations nationwide.'
      },
      {
        year: '2012',
        title: 'Digital Integration',
        description: 'Launched proprietary marketing analytics and program management platform.'
      },
      {
        year: '2018',
        title: 'Global Reach',
        description: 'Expanded capabilities through strategic international partnerships.'
      },
      {
        year: '2023',
        title: 'Innovation Leader',
        description: 'Recognized as industry leader in integrated promotional marketing solutions.'
      }
    ]
  })
}
</script> 