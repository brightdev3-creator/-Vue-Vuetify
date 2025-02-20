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
              class="fade-in"
            />
            <div class="hero-content d-flex flex-column fill-height justify-center align-center text-white text-center">
              <h1 class="text-h2 font-weight-bold mb-4 slide-down">
                Full-Service Promotional Marketing Solutions
              </h1>
              <p class="text-h5 mb-8 slide-down-delay-1">
                Delivering turnkey marketing programs from concept to execution
              </p>
              <v-btn
                x-large
                color="primary"
                class="text-none slide-down-delay-2"
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
    <div class="services-section">
    <v-container id="services" class="py-12">
      <v-row class="text-center mb-12">
        <v-col cols="12" class="services-fade-up">
          <h2 class="text-h4 font-weight-bold mb-4">Comprehensive Marketing Services</h2>
          <p class="text-body-1">End-to-end promotional marketing solutions for modern brands</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="(service, index) in services"
          :key="service.title"
          cols="12"
          md="4"
          :class="'services-card-animate-' + index"
        >
          <v-card
            class="mx-auto rounded-lg"
            height="100%"
            :elevation="2"
          >
            <v-card-item>
              <v-card-title class="text-h6 mb-3 d-flex flex-column">
                <v-icon
                  size="48"
                  color="primary"
                  class="mb-4"
                >
                  {{ service.icon }}
                </v-icon>
                <div class="font-weight-bold">
                  {{ service.title }}
                </div>
              </v-card-title>
              <v-card-text class="pl-0">
                {{ service.description }}
              </v-card-text>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
    <!-- Stats Section with counter animation -->
    <v-container fluid class="py-12 stats-section">
    <v-container>
      <v-row>
        <v-col
          v-for="(stat, index) in stats"
          :key="stat.value"
          cols="12"
          md="3"
          class="text-center"
          ref="statCol"
        >
          <h3 class="text-h3 font-weight-bold primary--text mb-2">
            {{ displayedStats[index] }}
          </h3>
          <p class="text-h6">{{ stat.label }}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>

    <!-- CTA Section -->
    <v-container class="py-12 CTA rounded-lg">
      <v-row align="center py-12" justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h2 class="text-h3 font-weight-bold mb-4 text-white">
            Ready to Grow Your Brand?
          </h2>
          <p class="text-h6 mb-8 text-white">
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
    ],
    displayedStats: ['1M+', '0+', '0+', '0+'],
    statsAnimated: false
  }),
  methods: {
    withBase,
    animateNumber(index, start, end, duration = 2000) {
      // Skip animation for 1M+ value
      if (end === '1M+') return;

      const startNum = parseInt(start.replace(/\D/g, ''));
      const endNum = parseInt(end.replace(/\D/g, ''));
      const suffix = end.includes('+') ? '+' : '';
      let unit = '';

      // Handle K suffix for thousands
      if (end.includes('K')) {
        unit = 'K';
      }

      const range = endNum - startNum;
      const startTime = Date.now();

      const updateNumber = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;

        if (elapsed > duration) {
          this.displayedStats[index] = end;
          return;
        }

        const progress = elapsed / duration;
        const currentNum = Math.floor(startNum + (range * progress));
        this.displayedStats[index] = currentNum + unit + suffix;

        requestAnimationFrame(updateNumber);
      };

      requestAnimationFrame(updateNumber);
    },
    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.statsAnimated) {
          this.statsAnimated = true;
          this.stats.forEach((stat, index) => {
            // Skip first stat (1M+) initially to let others catch up a bit
            if (index === 0) {
              setTimeout(() => {
                // Optional: add a quick animation for 1M
                this.animateNumber(index, '900K+', '1M+', 500);
              }, 1000); // Start after 1 second
            } else {
              this.animateNumber(index, '0+', stat.value);
            }
          });
        }
      });
    }
  },
  mounted() {
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: 0.2
    });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }
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
.services-section {
  background-image: url('/images/services/bgSupport.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
.CTA{
  background-image: url('/images/bgFeatures.png');
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 100px !important;
  margin-bottom: 100px!important;
}
.stats-section {
  background: hsla(186, 33%, 94%, 1);

background: linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);

background: -moz-linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);

background: -webkit-linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#EBF4F5", endColorstr="#B5C6E0", GradientType=1 );
}

.fade-in {
  animation: fadeIn 1s ease-out 0.3 ;
}

.slide-down {
  animation: slideDown 1s ease-out;
}

.slide-down-delay-1 {
  animation: slideDown 1s ease-out 0.9s both;
}

.slide-down-delay-2 {
  animation: slideDown 1s ease-out 0.14s both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.services-fade-up {
  opacity: 0;
  animation: servicesFadeUp 0.8s ease-out forwards;
}

.services-card-animate-0 {
  opacity: 0;
  animation: servicesFadeUp 0.8s ease-out 0.2s forwards;
}

.services-card-animate-1 {
  opacity: 0;
  animation: servicesFadeUp 0.8s ease-out 0.4s forwards;
}

.services-card-animate-2 {
  opacity: 0;
  animation: servicesFadeUp 0.8s ease-out 0.6s forwards;
}

@keyframes servicesFadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.services-section {
  overflow: hidden;
}
</style>
