<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="bg-grey-lighten-4 py-16">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <h1 class="text-h2 font-weight-bold mb-4">
              Integrated Marketing Solutions
            </h1>
            <p class="text-h6">
              From strategy to execution, we deliver comprehensive promotional marketing programs that drive measurable results.
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <v-img
              :src="withBase('/images/solutions-hero.jpg')"
              height="400"
              cover
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Solutions Grid -->
    <v-container class="py-16">
      <v-row>
        <v-col v-for="solution in solutions" :key="solution.title" cols="12" md="6" class="mb-8">
          <v-card elevation="2">
            <v-card-item>
              <v-icon size="48" color="primary" class="mb-4">
                {{ solution.icon }}
              </v-icon>
              <v-card-title class="text-h4 mb-4">
                {{ solution.title }}
              </v-card-title>
              <v-card-text>
                <p class="text-body-1 mb-4">{{ solution.description }}</p>
                <v-list>
                  <v-list-item v-for="feature in solution.features" :key="feature">
                    <template v-slot:prepend>
                      <v-icon color="success">mdi-check-circle</v-icon>
                    </template>
                    {{ feature }}
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Case Studies -->
    <v-container fluid class="bg-grey-lighten-4 py-16">
      <v-container>
        <h2 class="text-h3 text-center font-weight-bold mb-12">Success Stories</h2>
        <v-row>
          <v-col v-for="case_study in case_studies" :key="case_study.title" cols="12" md="4">
            <v-card>
              <v-img 
                :src="withBase(`/images/case-studies/${case_study.image}`)"
                height="200"
                cover
              ></v-img>
              <v-card-item>
                <v-card-title class="text-h5 mb-2">{{ case_study.title }}</v-card-title>
                <v-card-subtitle>{{ case_study.client }}</v-card-subtitle>
                <v-card-text>{{ case_study.description }}</v-card-text>
                <v-card-actions>
                  <v-btn color="primary" variant="text">Read More</v-btn>
                </v-card-actions>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import { withBase } from '@/utils/paths'

export default {
  name: 'Solutions',
  methods: {
    withBase
  },
  data: () => ({
    solutions: [
      {
        icon: 'mdi-strategy',
        title: 'Strategic Services',
        description: 'Comprehensive marketing strategy development and program planning to achieve your brand objectives.',
        features: [
          'Market research & analysis',
          'Campaign strategy development',
          'Budget optimization',
          'KPI definition',
          'ROI modeling'
        ]
      },
      {
        icon: 'mdi-palette',
        title: 'Creative & Design',
        description: 'Full-service creative development to bring your brand story to life across all touchpoints.',
        features: [
          'Brand identity & guidelines',
          'Campaign creative development',
          'Environmental design',
          'Digital content creation',
          'Promotional materials'
        ]
      },
      {
        icon: 'mdi-cogs',
        title: 'Program Execution',
        description: 'End-to-end program management with our proven operational expertise.',
        features: [
          'Project management',
          'Staffing & training',
          'Logistics coordination',
          'Quality assurance',
          'Real-time reporting'
        ]
      },
      {
        icon: 'mdi-chart-bar',
        title: 'Analytics & Insights',
        description: 'Transform program data into actionable insights to optimize performance and demonstrate ROI.',
        features: [
          'Real-time dashboards',
          'Consumer feedback analysis',
          'ROI measurement',
          'Market insights',
          'Trend reporting'
        ]
      }
    ],
    case_studies: [
      {
        image: '/images/case-study-1.jpg',
        title: 'Integrated Brand Launch',
        client: 'Leading Consumer Tech Brand',
        description: 'Developed and executed a multi-channel launch strategy including experiential events, influencer partnerships, and digital activation.'
      },
      {
        image: '/images/case-study-2.jpg',
        title: 'National Brand Campaign',
        client: 'Premium Lifestyle Brand',
        description: 'Created and managed an integrated promotional campaign spanning 50 markets, driving 300% increase in brand engagement.'
      },
      {
        image: '/images/case-study-3.jpg',
        title: 'Market Expansion Strategy',
        client: 'Emerging DTC Brand',
        description: 'Developed and executed omnichannel marketing strategy that successfully launched the brand into physical retail.'
      }
    ]
  })
}
</script> 