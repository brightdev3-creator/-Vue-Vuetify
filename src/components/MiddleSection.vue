<template>
 <v-container fluid>
    <v-row>
      <!-- Sticky Image Section -->
      <v-col cols="12" md="6" class="sticky-section">
        <v-card class="overlay-card" flat>
          <v-img
            src="/public/images/feature-img.png"
            height="90vh"
            cover
          >
            <div class="overlay">
              <h2 class="text-white main-text" style="font-size: 64px; font-weight: 700">Comprehensive Marketing Services</h2>
              <p class="text-white" style="font-size: 18px; font-weight: 500">
                End-to-end promotional marketing solutions crafted for modern brands seeking exceptional results.
              </p>
            </div>
          </v-img>
        </v-card>
      </v-col>

      <!-- Scrolling Cards Section -->
      <v-col cols="12" md="6">
        <div class="scrollable-content">
          <!-- First Card -->
          <v-card class="blue-card " elevation="4" height="90vh">
            <div class="  base-card">
              <v-img src="/images/blub.png"></v-img>
              <span class="mt-3" style="font-size: 48px; front-weight-700" >Strategic Planning</span>
              <span class="" style="font-size: 18px; front-weight-700; text-align: left;">Comprehensive promotional marketing strategies aligned with your brand objectives.</span>
            </div>
          </v-card>

          <!-- Second Card (Below) -->
          <v-card class="blue-card mt-6" elevation="4" height="90vh">
            <v-container class="text-center text-white d-flex flex-column justify-center align-center">
              <v-icon size="50">mdi-chart-line</v-icon>
              <h3 class="font-weight-bold mt-3">Market Analysis</h3>
              <p class="px-6">Get deep insights into your market for better decision-making and growth.</p>
            </v-container>
          </v-card>

          <!-- Third Card (Below) -->
          <v-card class="blue-card mt-6" elevation="4" height="90vh">
            <v-container class="text-center text-white d-flex flex-column align-center">
              <v-icon size="50">mdi-bullhorn</v-icon>
              <h3 class="font-weight-bold mt-3">Brand Promotion</h3>
              <p class="px-6">Enhance your brand visibility and engagement with our strategic campaigns.</p>
            </v-container>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

.base-card{
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

/* Ensuring Full Height */
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

/* Scrolling Content Section */
.scrollable-content {
  padding-bottom: 50px;
}

/* Cards with Background Color */
.blue-card {
  background-color: #2196F3;
  color: white;
  border-radius: 10px;
  text-align: center;
  padding: 40px 20px;
}
</style>