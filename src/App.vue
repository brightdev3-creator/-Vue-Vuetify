<template>
  <v-app>
    <!-- Navigation -->
    <v-app-bar app color="primary" elevation="1" dark>
      <v-container class="py-0 fill-height v-container-nav">
        <Logo class="mr-5" />

       
        <!-- Desktop Navigation -->
        <div class="d-none d-md-flex">
          <v-btn
            v-for="item in menuItems"
            :key="item.title"
            :to="item.to"
            text
            class="text-body-1 font-weight-bold"
          >
            <span class="d-none d-lg-block">{{ item.title }}</span>
            <span class="d-md-block d-lg-none">{{ item.shortTitle }}</span>
          </v-btn>
        </div>

        <!-- Mobile Navigation Button -->
        <v-btn icon @click="drawer = !drawer" class="d-md-none">
          <v-icon>mdi-menu</v-icon>
        </v-btn>

        <v-btn
          color="white"
          class="ml-4 d-none d-md-inline-flex font-weight-bold rounded-lg"
          to="/contact"
          variant="outlined"
        >
          Contact Us
        </v-btn>
        <v-btn
          color="white"
          class="ml-4 d-inline-flex d-md-none"
          to="/contact"
          variant="outlined"
          icon
        >
          <v-icon>mdi-email</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      location="top"
      class="d-md-none"
    >
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            :to="item.to"
            @click="drawer = false"
          >
            {{ item.title }}
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <PageTransition />
    </v-main>

    <!-- Footer -->
    
    <AppFooter  />
  </v-app>
</template>

<script>
import { NAV_ITEMS, FOOTER_SOLUTIONS, FOOTER_COMPANY, CONTACT_INFO } from '@/constants/navigation'
import PageTransition from '@/components/PageTransition.vue'
import Logo from '@/components/Logo.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: "App",
  components: {
    PageTransition,
    Logo,
    SocialLinks,
    AppFooter
  },
  data: () => ({
    menuItems: NAV_ITEMS,
    footerSolutions: FOOTER_SOLUTIONS,
    footerCompany: FOOTER_COMPANY,
    contactInfo: CONTACT_INFO,
    drawer: false, // Add this line to control the drawer
  }),
};
</script>
<style scoped>
@media (min-width: 1280px) {
    .v-container-nav {
        max-width: 1220px;
    }
}
</style>