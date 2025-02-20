<template>
  <v-app>
    <!-- Navigation -->
    <v-app-bar app color="primary" elevation="1" dark>
      <v-container class="py-0 fill-height">
        <Logo class="mr-5" />

        <v-spacer></v-spacer>

        <!-- Desktop Navigation -->
        <div class="d-none d-md-flex">
          <v-btn
            v-for="item in menuItems"
            :key="item.title"
            :to="item.to"
            text
            class="text-none"
          >
            <span class="d-none d-lg-block">{{ item.title }}</span>
            <span class="d-md-block d-lg-none">{{ item.shortTitle }}</span>
          </v-btn>
        </div>

        <!-- Mobile Navigation Button -->
        <v-btn
          icon
          @click="drawer = !drawer"
          class="d-md-none"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>

        <v-btn
          color="white"
          class="ml-4 d-none d-md-inline-flex"
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
    <v-footer class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <h3 class="text-h6 mb-4 font-weight-bold">Samplers Inc</h3>
            <p class="mb-4">Leading the way in product sampling and brand activation solutions.</p>
            <div class="d-flex">
              <v-btn icon="mdi-facebook" variant="text" class="mr-2" href="https://www.facebook.com/SamplersInc/" target="_blank"></v-btn>
              <v-btn icon="mdi-twitter" variant="text" class="mr-2" href="https://twitter.com/samplersinc" target="_blank"></v-btn>
              <v-btn icon="mdi-instagram" variant="text" href="https://www.instagram.com/samplersinc/" target="_blank"></v-btn>
            </div>
          </v-col>

          <v-col cols="12" md="8">
            <v-row>
              <v-col cols="12" sm="4">
                <h4 class="text-h6 mb-4 font-weight-bold">Solutions</h4>
                <v-list density="compact" nav class="pa-0 bg-transparent">
                  <v-list-item v-for="item in footerSolutions"
                               :key="item.title"
                               density="compact"
                               class="pa-0"
                               min-height="24"
                  >
                    <router-link :to="item.to" class="text-body-2 text-black  text-decoration-none footer-title">{{ item.title }}</router-link>
                  </v-list-item>
                </v-list>
              </v-col>

              <v-col cols="12" sm="4">
                <h4 class="text-h6 mb-4 font-weight-bold">Company</h4>
                <v-list density="compact" nav class="pa-0 bg-transparent">
                  <v-list-item v-for="item in footerCompany"
                               :key="item.title"
                               density="compact"
                               class="pa-0"
                               min-height="24"
                  >
                    <router-link :to="item.to" class="text-body-2 text-black  text-decoration-none footer-title ">{{ item.title }}</router-link>
                  </v-list-item>
                </v-list>
              </v-col>

              <v-col cols="12" sm="4">
                <h4 class="text-h6 mb-4 font-weight-bold">Contact</h4>
                <v-list density="compact" nav class="pa-0 bg-transparent">
                  <v-list-item class="footer-list-item">
                    <template v-slot:prepend>
                      <v-icon color="primary">mdi-map-marker</v-icon>
                    </template>
                    <v-list-item-title class="ml-2">
                      Samplers, Inc.<br>
                      530 Smithfield Ave<br>
                      Pawtucket, RI 02860
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item class="footer-list-item">
                    <template v-slot:prepend>
                      <v-icon color="primary">mdi-phone</v-icon>
                    </template>
                    <v-list-item-title class="ml-2">401.722.4800</v-list-item-title>
                  </v-list-item>
                  <v-list-item class="footer-list-item">
                    <template v-slot:prepend>
                      <v-icon color="primary">mdi-email</v-icon>
                    </template>
                    <v-list-item-title class="ml-2">
                      For General Info:<br>
                      info@samplersinc.com
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item class="footer-list-item">
                    <template v-slot:prepend>
                      <v-icon color="primary">mdi-email</v-icon>
                    </template>
                    <v-list-item-title class="ml-2">
                      To Contact Management:<br>
                      management@samplersinc.com
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-divider class="my-4"></v-divider>

        <div class="text-center">
          © {{ new Date().getFullYear() }} Samplers Inc. All rights reserved.
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { NAV_ITEMS, FOOTER_SOLUTIONS, FOOTER_COMPANY, CONTACT_INFO } from '@/constants/navigation'
import PageTransition from '@/components/PageTransition.vue'
import Logo from '@/components/Logo.vue'
import SocialLinks from '@/components/SocialLinks.vue'

export default {
  name: 'App',
  components: {
    PageTransition,
    Logo,
    SocialLinks
  },
  data: () => ({
    menuItems: NAV_ITEMS,
    footerSolutions: FOOTER_SOLUTIONS,
    footerCompany: FOOTER_COMPANY,
    contactInfo: CONTACT_INFO,
    drawer: false // Add this line to control the drawer
  })
}
</script>
<style lang="scss">
.footer-list-item{
  padding-left: 0px;

  .v-list-item__prepend
  {
    .v-list-item__spacer
    {
      display: none;
    }
  }
}
.footer-title{
  &:hover {
    text-decoration: underline !important;

  }

}

</style>
