<template>
  <v-container fluid class="mt-10 px-5">



    <!-- Title & Description -->
    <v-row justify="center" class="text-center mb-6">
      <v-col cols="12" md="8">
        <h2 class="font-weight-bold">Our People Make The Difference</h2>
        <p class="subheading">
          End-to-end promotional marketing solutions crafted for modern brands seeking exceptional results.
        </p>
      </v-col>
    </v-row>

    <!-- Image Grid -->
    <v-row class="d-flex" justify="center">
      <!-- First row: 3 images -->
      <v-col cols="12" sm="4" class=" align-self-start">
        <v-img class="rounded-img" src="/public/images/about-hero.jpg" cover></v-img>
      </v-col>
      <v-col cols="12" sm="4" class="d-flex justify-center">
        <v-img class="rounded-img" src="/public/images/about-hero.jpg" cover></v-img>
      </v-col>
      <v-col cols="12" sm="4" class="d-flex justify-center">
        <v-img class="rounded-img" src="/public/images/about-hero.jpg" cover></v-img>
      </v-col>

      <!-- Second row: 2 images -->
      <v-col cols="12" sm="6" class="d-flex justify-center">
        <v-img class="rounded-img large-img" src="/public/images/about-hero.jpg" cover></v-img>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex justify-center">
        <v-img class="rounded-img large-img" src="/public/images/about-hero.jpg" cover></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
/* Section spacing */
.mt-10 {
  margin-top: 60px;
}

/* Subtitle Styling */
.subheading {
  font-size: 16px;
  color: #666;
}

/* Image Styling */
.rounded-img {
  border-radius: 15px;
  width: 100%;
 
  height: 300px;
  object-fit: cover;
}

/* Larger images in the second row */
.large-img {
 
  height: 300px;
}
</style>
