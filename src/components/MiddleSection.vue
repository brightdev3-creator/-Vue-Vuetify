<template>
  <v-container fluid>
    <v-row>
      <!-- Sticky Image Section -->
      <v-col cols="12" md="6" class="sticky-section">
        <v-card class="overlay-card" flat>
          <v-img
            :src="currentImage"
            height="90vh"
            cover
          >
            <div class="overlay">
              <h2 class="text-white main-text" style="font-size: 64px; font-weight: 700">Comprehensive Marketing Services</h2>
              <p class="text-white" style="font-size: 18px; font-weight: 500">
                End-to-end promotional marketing solutions crafted for modern brands seeking exceptional results.
              </p>
              <v-list dense class="nav-list">
  <v-list-item 
    v-for="(card, index) in cards" 
    :key="index" 
    @click="scrollToCard(index)"
    class="nav-item"
  >
    <v-list-item-content>
      <v-list-item-title>{{ card.title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</v-list>
            </div>
              <!-- Navigation List -->
      
          </v-img>
        </v-card>

      
      </v-col>

      <!-- Scrolling Cards Section -->
      <v-col cols="12" md="6">
        <div class="scrollable-content" ref="scrollContainer">
          <v-card 
            v-for="(card, index) in cards" 
            :key="index"
            ref="cardsRef"
            :class="card.class" 
            elevation="4" 
            height="90vh"
            class="mb-6"
          >
            <div class="base-card">
              <img :src="card.icon" />
              <span class="mt-3" style="font-size: 48px; font-weight: 700">{{ card.title }}</span>
              <span class="" style="font-size: 18px; font-weight: 700; text-align: left;">{{ card.description }}</span>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const cards = ref([
  {
    title: 'Strategic Planning',
    icon: '/images/blub.png',
    description: 'Comprehensive promotional marketing strategies aligned with your brand objectives.',
    class: 'blue-card',
    image: '/public/images/feature-img.png'
  },
  {
    title: 'Creative Development',
    icon: '/images/blub-black.png',
    description: 'Transform your brand with compelling creative strategies that engage audiences.',
    class: 'white-card',
    image: '/public/images/gallary2.png'
  },
  {
    title: 'Performance Marketing',
    icon: '/images/blue-blub.png',
    description: 'Drive measurable results with targeted digital marketing campaigns.',
    class: 'ligh-blue-card',
    image: '/public/images/gallary3.png'
  }
]);

const currentImage = ref(cards.value[0].image);
const cardsRef = ref([]);
const scrollContainer = ref(null);

const handleScroll = () => {
  if (!scrollContainer.value) return;

  let closestIndex = 0;
  let minDiff = Infinity;

  cardsRef.value.forEach((card, index) => {
    const rect = card?.$el.getBoundingClientRect();
    if (rect) {
      const diff = Math.abs(rect.top);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = index;
      }
    }
  });

  currentImage.value = cards.value[closestIndex].image;
};

const scrollToCard = (index) => {
  if (cardsRef.value[index]?.$el) {
    cardsRef.value[index].$el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>


<style scoped>
.base-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 86px;
  width: 570px;
}

.sticky-section {
  position: sticky;
  top: 0;
  height: 100vh;
}

.overlay-card {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
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

/* Scrollable Section */
.scrollable-content {
  padding-bottom: 50px;
}

/* Card Styling */
.blue-card {
  background-color: #2196F3;
  color: white;
  border-radius: 10px;
  text-align: center;
  padding: 40px 20px;
}

.white-card {
  background-color: white;
  color: black;
  border-radius: 10px;
  text-align: center;
  padding: 40px 20px;
}

.ligh-blue-card {
  background-color: #F4FAFE;
  color: black;
  border-radius: 10px;
  text-align: center;
  padding: 40px 20px;
}

/* List Styling */
.nav-list {
  margin-top: 20px;
  background: transparent;
}

/* List Item */
.nav-item {
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
  color: white; /* Set font color to white */
  display: flex;
  align-items: center;
  transition: background 0.3s;
  position: relative;
}

/* Bullet Dot on Left */
.nav-item::before {
  content: '•'; /* Bullet symbol */
  color: white; /* Bullet color */
  font-size: 24px;
  margin-right: 10px;
}
.nav-list .v-list-item {
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
  transition: background 0.3s;

}


</style>
