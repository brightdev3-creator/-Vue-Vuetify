<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="hero pa-0">
      <v-row no-gutters>
        <v-col cols="12">
          <div class="hero-wrapper">
            <v-carousel
              cycle
              height="700"
              hide-delimiter-background
              show-arrows-on-hover
              :show-arrows="false"
            >
              <v-carousel-item
                v-for="item in items"
                :key="item"
                :src="item.src"
                reverse-transition="fade-transition"
                cover
              ></v-carousel-item>
            </v-carousel>
            <div class="hero-overlay animate-on-scroll"></div>
            <div
              class="hero-content d-flex flex-column fill-height justify-center align-center text-white text-center"
            >
              <v-slide-y-transition appear>
                <h1
                  class="text-h2 font-weight-bold mb-4 hero-title"
                >
                  Full-Service Promotional Marketing Solutions
                </h1>
              </v-slide-y-transition>
              <v-slide-y-transition appear :delay="200">
                <p
                  class="text-h4 mb-8 hero-tagline max-width-500"
                >
                  Delivering turnkey marketing programs from concept to
                  execution with precision and expertise
                </p>
              </v-slide-y-transition>
              <v-slide-y-transition appear :delay="400">
                <v-btn
                  depressed
                  x-large
                  color="primary"
                  class="text-none rounded-lg px-8 py-2 elevation-2 pulse-animation"
                  href="#services"
                  height="56"
                >
                  <span class="font-weight-bold text-body-1"
                    >Explore Our Services</span
                  >
                </v-btn>
              </v-slide-y-transition>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
<!-- Stats Section -->
    <v-container fluid class="py-12 mb-1" :style="{ background: 'linear-gradient(135deg, rgb(140 201 255), rgb(255 255 255))' }">
      <v-container>
        <div
          v-intersect="{
            handler: onStatsIntersect,
            options: { threshold: 0.4 },
          }"
        >
          <v-row>
            <v-col
              v-for="stat in stats"
              :key="stat.value"
              cols="12"
              md="3"
              class="text-center"
            >
              <h3 class="text-h3 font-weight-bold primary--text mb-2">
                {{ stat.value }}
              </h3>
              <p class="text-h6">{{ stat.label }}</p>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-container>
    <!-- Services Section -->
  
    <v-container fluid id="services" class=" pa-0">
     
      <MiddleSection />
    </v-container>
    <v-container fluid id="services" class=" pa-0">
     
     <GallarySection />
   </v-container>
   <v-container fluid>
  <v-img class="rounded-img" src="/images/video-img.png" cover>
    <div class="overlay">
      <img  src="/images/video-start.png"  />
    </div>
  </v-img>
</v-container>
    
    <!-- CTA Section -->
    <v-container fluid class=" cta-section py-16 mb-1">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="8" class="text-center">
            <div class="cta-content">
              <h2 class="text-h3 font-weight-bold mb-4">
                Ready to Elevate Your Brand?
              </h2>
              <p class="text-h6 mb-8 max-width-600 mx-auto">
                Let's discuss how our proven expertise can help you achieve
                measurable growth and exceptional results
              </p>
              <v-btn
                x-large
                depressed
                color="primary"
                class="primary--text px-8 py-2 elevation-2"
                to="/contact"
                height="56"
                rounded
              >
                <span class="font-weight-bold text-body-1">Contact Us Today</span>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

   
<!-- 
    <v-container fluid class="cool-cta-section">
    <v-row justify="center" align="center" class="fill-height pt-10">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="text-h2 font-weight-bold gradient-text mb-4">
          Ready to Grow Your Brand?
        </h1>
        <p class="text-subtitle-1 grey--text text--lighten-1 mb-6">
          Let’s discuss how we can help you reach your goals
        </p>
        <v-btn
          color="blue-accent-4"
          dark
          rounded
          x-large
          class="elevation-6"
          @mouseover="hover = true"
          @mouseleave="hover = false"
          :elevation="hover ? 12 : 6"
          @click="handleClick"
        >
          Contact Us Today
        </v-btn>
      </v-col>
    </v-row>
  </v-container> -->
  </div>
</template>

<script>
import { IMAGES, PLACEHOLDER_COLORS } from "@/constants/images";
import PlaceholderImage from "@/components/PlaceholderImage.vue";
import { withBase } from "@/utils/paths";
import MiddleSection from "@/components/MiddleSection.vue";
import GallarySection from "@/components/GallarySection.vue";

export default {
  name: "Home",
  components: {
    PlaceholderImage,
    MiddleSection,
    GallarySection
  },
  data: () => ({
    hover: '',
    images: IMAGES,
    colors: PLACEHOLDER_COLORS,
    services: [
      {
        icon: "mdi-lightbulb",
        title: "Strategic Planning",
        description:
          "Comprehensive promotional marketing strategies aligned with your brand objectives.",
        visible: false,
      },
      {
        icon: "mdi-creation",
        title: "Creative Services",
        description:
          "Custom program design, creative development, and brand storytelling.",
        visible: false,
      },
      {
        icon: "mdi-cog-sync",
        title: "Program Management",
        description:
          "Full-service execution including staffing, logistics, and operational excellence.",
        visible: false,
      },
    ],
    stats: [
      { value: "1M+", label: "Consumer Interactions" },
      { value: "50K+", label: "Events Completed" },
      { value: "1000+", label: "Brand Partners" },
      { value: "25+", label: "Years Experience" },
    ],
    items: [
      {
        src: withBase("/images/home/home1.jpg"),
      },
      {
        src: withBase("/images/home/home2.jpg"),
      },
      {
        src: withBase("/images/home/home3.jpg"),
      },
      {
        src: withBase("/images/home/home4.jpg"),
      },
      {
        src: withBase("/images/home/home5.jpg"),
      },
      {
        src: withBase("/images/home/home6.jpg"),
      },
      {
        src: withBase("/images/home/home7.jpg"),
      },
      {
        src: withBase("/images/home/home8.jpg"),
      },
    ],
  }),
  methods: {
    withBase,
    onStatsIntersect(isIntersecting, entries, observer) {
      if (entries[0].intersectionRatio > 0.4) {
        this.animateStats(); // Start the animation
      }
    },
    animateStats() {
      this.stats.forEach((stat, index) => {
        const match = stat.value.match(/^(\d+)([MK]?\+?)$/);
        if (!match) return;

        const originValue = parseFloat(match[1]);
        let numericValue = parseFloat(match[1]);
        const suffix = match[2];
        if (suffix === "M+") {
          numericValue = numericValue * 1000000;
        } else if (suffix === "K+") {
          numericValue = numericValue * 1000;
        }

        let count = 0;
        const duration = 2000;
        const increment = numericValue / (duration / 50);

        const timer = setInterval(() => {
          count += increment;
          if (count >= numericValue) {
            clearInterval(timer);
            count = originValue;
            this.stats[index].value = `${Math.floor(count)}${suffix}`;
          } else {
            this.stats[index].value = `${Math.floor(count)}`;
            if (count > 1000) {
              this.stats[index].value = `${Math.floor(count / 1000)}K`;
            }
          }
        }, 32);
      });
    },
    animateHeroOnScroll() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = entry.target.getAttribute("data-index");
            if (entry.isIntersecting) {
              this.services[index].visible = true;
              observer.unobserve(entry.target);
            } else {
              this.services[index].visible = false;
            }
          });
        },
        {
          threshold: 0.3,
        }
      );

      document.querySelectorAll(".service-card").forEach((card, index) => {
        card.setAttribute("data-index", index);
        observer.observe(card);
      });
    },
  },
  mounted() {
    // this.animateStats();
  },
};
</script>

<style scoped>

.rounded-img {
  border-radius: 15px;
 
 
  height: 600px;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}



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

.title-underline {
  width: 80px;
  height: 3px;
  background-color: var(--v-primary-base);
}

.pulse-animation {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(var(--v-primary-base-rgb), 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(var(--v-primary-base-rgb), 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(var(--v-primary-base-rgb), 0);
  }
}

.service-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(var(--v-primary-base-rgb), 0.1);
  margin-top: 1rem;
}

.cta-section {
  background: linear-gradient(
    135deg,
    var(--v-primary-darken1),
    var(--v-primary-base)
  );
  position: relative;
  overflow: hidden;
}

.cta-content {
  position: relative;
  z-index: 2;
}

#services {
  scroll-margin-top: 60px; /* Adjust this value to match your fixed top menu's height */
}


.cool-section {
  background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
  min-height: 80vh;
  padding: 0;
}

.service-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  transform: scale(1);
}

.service-card:hover {
  transform: scale(1.05);
  elevation: 10;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.gradient-text {
  background: linear-gradient(45deg, #0288d1, #8e24aa);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Icon animation on hover */
.v-icon {
  transition: all 0.3s ease;
}

.service-card:hover .v-icon {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.cool-cta-section {
  background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
  min-height: 40vh;
  padding: 0;
}

.gradient-text {
  background: linear-gradient(45deg, #4a90e2, #50c878);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.v-btn {
  transition: all 0.3s ease;
}

.v-btn:hover {
  transform: scale(1.05);
  background: linear-gradient(45deg, #4a90e2, #50c878);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.v-btn:active {
  transform: scale(0.98);
}
</style> 
