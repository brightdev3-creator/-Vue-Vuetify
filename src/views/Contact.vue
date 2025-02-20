<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="bg-primary py-16">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" class="text-white">
            <h1 class="text-h2 font-weight-bold mb-4">
              Contact Us
            </h1>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Contact Form & Info -->
    <v-container class="py-16">
      <v-row>
        <!-- Potential Client Section -->
        <v-col cols="12" md="6">
          <div class="contact-section">
            <h2 class="text-h4 font-weight-bold mb-4">Potential Client?</h2>
            <p class="mb-6">Let's discuss how we can help grow your brand through exceptional sampling experiences.</p>
            
            <h3 class="text-h5 font-weight-bold mb-6">Request a Quote</h3>
            <v-form @submit.prevent="submitForm" ref="form">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.firstName"
                    label="First Name"
                    :rules="[v => !!v || 'First name is required']"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.lastName"
                    label="Last Name"
                    :rules="[v => !!v || 'Last name is required']"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.email"
                    label="Email"
                    type="email"
                    :rules="emailRules"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.company"
                    label="Company"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-select
                    v-model="form.interest"
                    :items="interests"
                    label="I'm interested in"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="form.message"
                    label="Message"
                    rows="4"
                    :rules="[v => !!v || 'Message is required']"
                    required
                  ></v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    color="primary"
                    size="large"
                    type="submit"
                    :loading="loading"
                    block
                  >
                    Request Quote
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </div>
        </v-col>

        <!-- Brand Ambassador Section -->
        <v-col cols="12" md="5" offset-md="1">
          <div class="contact-section">
            <h2 class="text-h4 font-weight-bold mb-4">New Brand Ambassador?</h2>
            <p class="mb-6">Do you have what it takes to become the face of our brands? Become a brand ambassador today.</p>
            
            <v-btn
              color="primary"
              size="large"
              block
              href="https://portal.samplersinc.com"
              target="_blank"
            >
              Sign Up Today
            </v-btn>

            <v-divider class="my-6"></v-divider>

            <div class="contact-info">
              <h3 class="text-h5 font-weight-bold mb-4">Contact Information</h3>
              <v-list>
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-map-marker</v-icon>
                  </template>
                  <v-list-item-title>
                    Samplers, Inc.<br>
                    530 Smithfield Ave<br>
                    Pawtucket, RI 02860
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-phone</v-icon>
                  </template>
                  <v-list-item-title>401.722.4800</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-email</v-icon>
                  </template>
                  <v-list-item-title>andrew@samplersinc.com</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-email</v-icon>
                  </template>
                  <v-list-item-title>chris@samplersinc.com</v-list-item-title>
                </v-list-item>
              </v-list>

             
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data: () => ({
    loading: false,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      interest: '',
      message: ''
    },
    interests: [
      'In-Store Sampling',
      'Event Marketing',
      'Brand Ambassador Program',
      'Analytics & Insights',
      'Other'
    ],
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'Email must be valid'
    ]
  }),
  methods: {
    async submitForm() {
      const { valid } = await this.$refs.form.validate()
      
      if (valid) {
        this.loading = true
        // Implement form submission logic here
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.loading = false
        
        // Show success message
        // Reset form
        this.$refs.form.reset()
      }
    }
  }
}
</script>

<style scoped>
.contact-info {
  height: 100%;
  background-color: var(--v-grey-lighten-4);
  border-radius: 8px;
}

.contact-section {
  height: 100%;
  padding: 2rem;
  background-color: var(--v-grey-lighten-4);
  border-radius: 8px;
}
</style> 