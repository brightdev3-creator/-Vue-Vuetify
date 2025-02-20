<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="bg-primary py-16">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" class="text-white">
            <h1 class="text-h2 font-weight-bold mb-4">
              Join Our Team
            </h1>
            <p class="text-h5">
              Be part of a dynamic team that's shaping the future of brand experiences.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Why Join Us -->
    <v-container class="py-16">
      <h2 class="text-h3 text-center font-weight-bold mb-12">Why Work With Us</h2>
      <v-row>
        <v-col v-for="benefit in benefits" :key="benefit.title" cols="12" md="4">
          <v-card height="100%" class="d-flex flex-column">
            <v-card-item>
              <v-icon
                size="48"
                color="primary"
                class="mb-4"
              >
                {{ benefit.icon }}
              </v-icon>
              <v-card-title class="text-h5 mb-2">{{ benefit.title }}</v-card-title>
              <v-card-text>{{ benefit.description }}</v-card-text>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Open Positions -->
    <v-container fluid class="bg-grey-lighten-4 py-16">
      <v-container>
        <h2 class="text-h3 text-center font-weight-bold mb-12">Open Positions</h2>
        <v-row>
          <v-col cols="12" md="8" offset-md="2">
            <v-expansion-panels>
              <v-expansion-panel
                v-for="position in positions"
                :key="position.title"
              >
                <v-expansion-panel-title>
                  <div>
                    <div class="text-h6">{{ position.title }}</div>
                    <div class="text-subtitle-1">{{ position.location }} | {{ position.type }}</div>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <div class="mb-4">
                    <strong>About the Role:</strong>
                    <p>{{ position.description }}</p>
                  </div>
                  <div class="mb-4">
                    <strong>Requirements:</strong>
                    <ul>
                      <li v-for="req in position.requirements" :key="req">{{ req }}</li>
                    </ul>
                  </div>
                  <v-btn color="primary">
                    Apply Now
                  </v-btn>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Employee Testimonials -->
    <v-container class="py-16">
      <h2 class="text-h3 text-center font-weight-bold mb-12">Meet Our Team</h2>
      <v-row>
        <v-col v-for="testimonial in testimonials" :key="testimonial.name" cols="12" md="4">
          <v-card class="mx-auto" height="100%">
            <v-card-item>
              <template v-slot:prepend>
                <v-avatar size="80" :image="testimonial.image"></v-avatar>
              </template>
              <v-card-title>{{ testimonial.name }}</v-card-title>
              <v-card-subtitle>{{ testimonial.position }}</v-card-subtitle>
              <v-card-text>
                <v-icon color="primary" class="mb-2">mdi-format-quote-open</v-icon>
                {{ testimonial.quote }}
                <v-icon color="primary">mdi-format-quote-close</v-icon>
              </v-card-text>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Careers',
  data: () => ({
    benefits: [
      {
        icon: 'mdi-school',
        title: 'Growth & Development',
        description: 'Continuous learning opportunities and career advancement paths.'
      },
      {
        icon: 'mdi-account-group',
        title: 'Collaborative Culture',
        description: 'Work with passionate professionals in a supportive environment.'
      },
      {
        icon: 'mdi-medal',
        title: 'Competitive Benefits',
        description: 'Comprehensive healthcare, 401(k), and flexible PTO.'
      }
    ],
    positions: [
      {
        title: 'Senior Brand Ambassador Manager',
        location: 'New York, NY',
        type: 'Full-Time',
        description: 'Lead and develop our team of brand ambassadors while managing key client relationships.',
        requirements: [
          '5+ years of experience in brand ambassador management',
          'Strong leadership and communication skills',
          'Experience with event staffing and training',
          'Bachelor\'s degree in related field'
        ]
      },
      {
        title: 'Data Analytics Specialist',
        location: 'Remote',
        type: 'Full-Time',
        description: 'Analyze sampling program data and create actionable insights for our clients.',
        requirements: [
          '3+ years of experience in data analytics',
          'Proficiency in SQL and visualization tools',
          'Strong analytical and problem-solving skills',
          'Experience with marketing analytics preferred'
        ]
      }
    ],
    testimonials: [
      {
        name: 'Emily Rodriguez',
        position: 'Senior Brand Ambassador',
        image: '/images/testimonial1.jpg',
        quote: 'Working at Samplers has given me incredible opportunities to grow both personally and professionally.'
      },
      {
        name: 'David Kim',
        position: 'Operations Manager',
        image: '/images/testimonial2.jpg',
        quote: 'The collaborative culture and focus on innovation makes every day exciting and rewarding.'
      },
      {
        name: 'Lisa Chen',
        position: 'Account Executive',
        image: '/images/testimonial3.jpg',
        quote: 'I\'ve found my career home here. The support and growth opportunities are unmatched.'
      }
    ]
  })
}
</script> 