<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="bg-primary py-16">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" class="text-white">
            <h1 class="text-h2 font-weight-bold mb-4">
              Why Partner with Us?
            </h1>
            <p class="text-h5">
              Proven Performance. Measurable Impact. Unmatched Execution.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Performance Stats Section -->
    <v-container class="py-16">
      <v-row>
        <v-col cols="12">
          <h2 class="text-h3 font-weight-bold mb-6">Industry-Leading Execution Performance</h2>
          <p class="text-h6 text-primary mb-8">"The Proof is in the Numbers"</p>
          
          <v-row>
            <v-col cols="12" md="6" lg="3">
              <v-card class="h-100">
                <v-card-item>
                  <div class="text-h3 font-weight-bold text-primary mb-2">2,000+</div>
                  <div class="text-body-1">Events executed weekly, totaling 100,000+ annually across major retailers</div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="6" lg="3">
              <v-card class="h-100">
                <v-card-item>
                  <div class="text-h3 font-weight-bold text-primary mb-2">95%+</div>
                  <div class="text-body-1">Execution rate, ensuring high reliability and client satisfaction</div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="6" lg="3">
              <v-card class="h-100">
                <v-card-item>
                  <div class="text-h3 font-weight-bold text-primary mb-2">98%</div>
                  <div class="text-body-1">Client retention rate, showcasing strong partnerships</div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="6" lg="3">
              <v-card class="h-100">
                <v-card-item>
                  <div class="text-h3 font-weight-bold text-primary mb-2">100k+</div>
                  <div class="text-body-1">Staffing assignments fulfilled annually</div>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- Nationwide Reach Section -->
    <v-container fluid class="bg-grey-lighten-4 py-16">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2 class="text-h3 font-weight-bold mb-6">Nationwide Staffing Reach</h2>
            <p class="text-h6 text-primary mb-8">"Nationwide doesn't mean major metro"</p>
            
            <v-row>
              <v-col cols="12">
                <v-list class="mb-8">
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="primary" class="mt-2">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title class="text-h6 text-wrap">10,000+ trained brand ambassadors nationwide</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="primary" class="mt-2">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title class="text-h6 text-wrap">30+ years of experience in experiential marketing</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="primary" class="mt-2">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title class="text-h6 text-wrap">Proven track record with Fortune 500 brands</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="primary" class="mt-2">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title class="text-h6 text-wrap">Comprehensive reporting & analytics</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="primary" class="mt-2">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title class="text-h6 text-wrap">Full-service execution from start to finish</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
              
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Technology Section -->
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" md="6">
          <h2 class="text-h3 font-weight-bold mb-6">Real-Time Data and Reporting</h2>
          <p class="text-h6 text-primary mb-8">"Don't be left in the dark"</p>
          <v-list>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-chart-line</v-icon>
              </template>
              <v-list-item-title>Live event tracking</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-map-marker</v-icon>
              </template>
              <v-list-item-title>Brand Ambassador GPS check in and out requirements</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-clock</v-icon>
              </template>
              <v-list-item-title>24 Hour Initial Reporting</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12" md="6">
          <h2 class="text-h3 font-weight-bold mb-6">Technology Integration</h2>
          <p class="text-h6 text-primary mb-8">"The question isn't, can we do this? It is how quickly can we do it?"</p>
          <v-list>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-connection</v-icon>
              </template>
              <v-list-item-title>Integration with client reporting systems and event tracking systems</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-message</v-icon>
              </template>
              <v-list-item-title>Text Messaging capabilities</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-monitor</v-icon>
              </template>
              <v-list-item-title>State/City/County Wage Monitoring Software</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'WhyPartnerWithUs'
}
</script> 