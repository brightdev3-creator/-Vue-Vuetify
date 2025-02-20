<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="bg-primary py-16">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" class="text-white">
            <h1 class="text-h2 font-weight-bold mb-4">
              Event Staffing
            </h1>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Main Content -->
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" md="8">
          <p class="text-h6 mb-6">
            For over 30 years, Samplers Inc. has been a trusted leader in event staffing, providing top-tier event
            specialists, product ambassadors, costume characters, and wine sommeliers to bring brands to life.
          </p>
          <p class="text-body-1 mb-8">
            From retail activations and sporting events to festivals, nightclubs, restaurants, and trade shows, our
            experienced team delivers high-quality execution nationwide.
          </p>

          <!-- <h2 class="text-h4 font-weight-bold mb-6">Our comprehensive event staffing solutions include:</h2>
          <v-list class="mb-8">
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-check-circle</v-icon>
              </template>
<v-list-item-title class="text-wrap">Expertly trained staff tailored to your brand's needs</v-list-item-title>
</v-list-item>
<v-list-item>
  <template v-slot:prepend>
                <v-icon color="primary">mdi-check-circle</v-icon>
              </template>
  <v-list-item-title class="text-wrap">End-to-end workforce management for seamless execution</v-list-item-title>
</v-list-item>
<v-list-item>
  <template v-slot:prepend>
                <v-icon color="primary">mdi-check-circle</v-icon>
              </template>
  <v-list-item-title class="text-wrap">Real-time reporting & inventory management for measurable
    results</v-list-item-title>
</v-list-item>
<v-list-item>
  <template v-slot:prepend>
                <v-icon color="primary">mdi-check-circle</v-icon>
              </template>
  <v-list-item-title class="text-wrap">Fulfillment & collateral services to support every activation</v-list-item-title>
</v-list-item>
</v-list>

<p class="text-body-1 mb-6">
  With a focus on quality, accountability, and results, Samplers Inc. ensures your brand makes a lasting impact—wherever
  your audience is.
</p>

<p class="text-h5 font-weight-bold mb-8">
  Let's make your next event a success!
</p>


<div class="text-center">
  <v-btn color="primary" size="large" to="/contact">
    Contact Us
  </v-btn>
</div> -->




          <div class="container-fluid px-2 pb-24 overly">
            <section class="flex justify-center pt-16">
              <div class="order-2 lg:order-none mt-20">
                <div class="flex justify-start flex-col items-center sm:pb-10">
                  <h1 class="text-white text-3xl font-medium font-theme-heading text-center lg:text-left">
                    Pick a plan that’s
                  </h1>

                  <h1 class="text-white text-4xl font-bold font-theme-heading text-center lg:text-left">
                    Right For You
                  </h1>

                  <p style="text-align: center"
                    class="capitalize flex justify-center items-center text-lg sm:text-2xl text-gray-400 font-inter lg:text-md mt-16 mb-16 font-theme-content text-theme-grayish-blue text-center lg:text-left">
                    Vivamus est lorem, vestibulum eu justo nec, interdum consectetur
                    arcu. <br />
                    In facilisis nisl quis cursus ornare. Vivamus venenatis mattis
                  </p>
                </div>
              </div>
            </section>
            <div class="grid lg:grid-cols-6 sm:grid-cols-8 gap-4">
              <div class="lg:col-start-2 lg:col-span-4 sm:col-start-2 sm:col-span-6" v-for="pkg in packages" :key="pkg">
                <div :class="pkg.pkgType == 'recommended' ? 'recomended' : 'professional'
                  " class="col-start-2 col-span-4">
                  <span class="pt-4 text-center sm:text-start text-white sm:pl-9 text-2xl font-medium">
                    {{ pkg.off }}
                  </span>
                  <div class="  sm:text-start flex  flex-col "
                    :class="pkg.pkgType == 'recommended' ? 'base-2' : 'base'">
                    <span class="py-2 pl-9" v-if="pkg.pkgType == 'premium'">
                      <button
                        class="uppercase px-6 py-2 bg-purple-500 w-64 text-white hover:bg-purple-600 rounded shadow-md border-2 border-transparent cursor-pointer transition duration-200 rounded-full">
                        <a href="https://www.web.tavolo.ai/register" target="_blank">Contact To Sales Team</a>
                      </button>
                    </span>
                    <span v-else
                      class="text-4xl px-5 pt-8 sm:px-9 flex-wrap flex justify-center  flex-col sm:flex-row sm:justify-between items-center font-bold text-black pb-2">
                      <span class="flex flex-col justify-center  items-center sm:items-start">
                        <span class="text-2xl  font-medium uppercase text-slate-400 pb-2 ">
                          {{ pkg.pkgName }}
                        </span>
                        {{
                          packageType == "monthly"
                            ? pkg.monthlyPrice
                            : pkg.annualyPrice
                        }}
                      </span>

                      <button
                        class="uppercase title-3 w-50 px-6 py-3 primary my-2 text-white hover:bg-purple-800 rounded shadow-md border-2 border-transparent cursor-pointer transition duration-200 rounded-full">
                        <a href="https://buy.stripe.com/4gw16ta7T10FbscaEX" target="_blank">Subscribe</a>
                      </button>
                    </span>

                    <span v-show="pkg.pkgType != 'premium'"
                      class="text-base font-medium pl-5 text-center sm:text-start sm:pl-9 text-black pb-2">
                      Billed annually at $828{{ pkg.annualyBilled }}
                    </span>

                    <span class="flex justify-start pt-2 pb-10">
                      <ul class="pl-5 sm:pl-9 space-y-1 text-black list-inside dark:text-gray-400">
                        <li class="flex items-center pb-2" v-for="item in pkg.instructions" :key="item">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 36 36"
                            fill="none">
                            <mask id="mask0_279_559" style="mask-type: luminance" maskUnits="userSpaceOnUse" x="1" y="1"
                              width="34" height="34">
                              <path
                                d="M18 33C19.9702 33.0026 21.9215 32.6157 23.7417 31.8617C25.5619 31.1078 27.2152 30.0015 28.6065 28.6065C30.0015 27.2152 31.1078 25.5619 31.8617 23.7417C32.6157 21.9215 33.0026 19.9702 33 18C33.0025 16.0298 32.6157 14.0785 31.8617 12.2583C31.1077 10.4381 30.0015 8.78484 28.6065 7.39351C27.2152 5.99853 25.5619 4.89226 23.7417 4.13828C21.9215 3.38429 19.9702 2.99746 18 3.00001C16.0298 2.9975 14.0785 3.38435 12.2583 4.13833C10.4381 4.89232 8.78484 5.99857 7.39351 7.39351C5.99857 8.78484 4.89232 10.4381 4.13833 12.2583C3.38435 14.0785 2.9975 16.0298 3.00001 18C2.99746 19.9702 3.38429 21.9215 4.13828 23.7417C4.89226 25.5619 5.99853 27.2152 7.39351 28.6065C8.78484 30.0015 10.4381 31.1077 12.2583 31.8617C14.0785 32.6157 16.0298 33.0025 18 33Z"
                                fill="white" stroke="white" stroke-width="3" stroke-linejoin="round" />
                              <path d="M12 18L16.5 22.5L25.5 13.5" stroke="black" stroke-width="3"
                                stroke-linecap="round" stroke-linejoin="round" />
                            </mask>
                            <g mask="url(#mask0_279_559)">
                              <path d="M0 0H36V36H0V0Z" fill="#FCD831" />
                            </g>
                          </svg>
                          <span class="ml-1">
                            {{ item }}
                          </span>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid lg:grid-cols-6 sm:grid-cols-8 gap-4 additional-section">
              <div class="lg:col-start-2 lg:col-span-4 sm:col-start-2 sm:col-span-6" v-for="pkg in packages" :key="pkg">
                <div class=" sm:text-start flex flex-row flex-wrap justify-center sm:justify-between py-10"
                  :class="pkg.pkgType == 'recommended' ? 'base-2' : 'base'">
                  <span class="py-2 px-9" v-if="pkg.pkgType == 'premium'"> </span>
                  <div class="flex justify-center  align-center flex-col">
                    <span class="text-3xl text-center px-5 sm:px-9 font-bold text-black pb-2">
                      Looking for additional support?
                    </span>
                    <span v-show="pkg.pkgType != 'premium'"
                      class="text-base font-medium text-center sm:text-start pl-5 sm:pl-9 text-black pb-2">
                      Reach out to us.
                    </span>
                  </div>

                  <span class="py-2 sm:px-9 px-5">
                    <button v-if="pkg.pkgType != 'lite'"
                      class="uppercase px-6 py-2 bg-purple-500 w-55 text-white hover:bg-purple-600 rounded shadow-md border-2 border-transparent cursor-pointer transition duration-200 rounded-full">
                      <a href="https://calendly.com/tavolosocial/15min?month=2024-03&date=2024-03-27">Book a demo</a>
                    </button>

                  </span>
                </div>
              </div>
            </div>

          </div>
        </v-col>
      </v-row>

      <!-- Image Gallery -->
      <v-row class="mt-16">
        <v-col cols="12">
          <h2 class="text-h4 font-weight-bold mb-6">Featured Events</h2>
        </v-col>
        <v-col v-for="(image, index) in eventImages" :key="index" cols="12" sm="6" md="3">
         <FeatureCard :image="image" />
          <!-- <div>
            <v-hover v-slot="{ isHovering, props }">
              <v-card class="mx-auto" max-width="344" v-bind="props">
                <v-img :src="image.src" :alt="image.alt" height="200" cover class="bg-grey-lighten-2">
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="primary"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>

                <v-card-text>
                  <h2 class="text-h6 text-primary">
                    Magento Forests
                  </h2>
                  Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
                </v-card-text>



                <v-overlay :model-value="!!isHovering" class="align-center justify-center" scrim="#036358" contained>
                  <v-btn variant="flat">See more info</v-btn>
                  <v-scale-transition></v-scale-transition>
                </v-overlay>
              </v-card>
            </v-hover>
          </div> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { withBase } from '@/utils/paths';
import FeatureCard from '@/components/FeatureCard.vue';
import { components } from 'vuetify/dist/vuetify-labs.js';

export default {
  name: 'EventStaffing',
  components: {
    FeatureCard
  },
  data: () => ({
    eventImages: [
      {
        src: withBase('/images/events/event1.jpg'),
        alt: 'Event 1 description'
      },
      {
        src: withBase('/images/events/event2.jpg'),
        alt: 'Event 2 description'
      },
      {
        src: withBase('/images/events/event3.jpg'),
        alt: 'Event 3 description'
      },
      {
        src: withBase('/images/events/event4.jpg'),
        alt: 'Event 4 description'
      }
    ],
    packages: [

      {
        pkgType: "recommended",
        pkgName: "STARTING AT",
        off: "4 Months Off",
        monthlyPrice: "$500/month",
        annualyPrice: "$10,800/yr",
        instructions: [
          "Nullam condimentum pharetra urna, eget vulputate nisi maximus sit amet. ",
          "Donec ullamcorper sem placerat, dictum arcu vitae, viverra sapien. ",
          "In rutrum enim at velit ultricies, sit amet tristique purus sollicitudin.  ",
          "Pellentesque sollicitudin tincidunt tellus, vel porttitor sem mollis a. ",
          "Mauris eu luctus lectus. Maecenas ut odio lacinia, egestas ex vel, feugiat ante. ",
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.  ",
        ],
      },

    ],
  })
}
</script>

<style scoped>
.ml-40 {
  margin-left: 0px;
}

.overly {
  background-image: url("../assets/svg/_1.svg");
  overflow: hidden;
  width: 100%;
  height: 100%;
  /* height: 0;
  padding-bottom: calc(38% * 9 / 6.5); */
  background-repeat: no-repeat;
  background-size: cover;
  /* opacity: 12%; */
}

.base {
  height: 486px;

  border-radius: 38px;
  background: #fff;
  position: relative;
  top: 20px;
}

.recomended {
  flex-shrink: 0;
  border-radius: 38px;
  background: #9155fd;
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 60px;
  flex-direction: column;
}

.base-2 {
  /* height: 542px; */

  border-radius: 38px;
  background: #fff;
  position: relative;
  top: 20px;
}

.toggle-button {
  width: 520px;
  height: 87px;
  flex-shrink: 0;
  border-radius: 63.599px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.professional {
  flex-shrink: 0;
  border-radius: 38px;
  background: #fcd831;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.pointer {
  width: 251px;
  height: 77px;
  flex-shrink: 0;
  border-radius: 56.161px;
  background: #fcd831;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.toggle {
  width: 251px;
  height: 77px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 22.714px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
}

/* Media Query for Mobile Devices */
@media (max-width: 480px) {
  .mobile-margin {
    margin-left: 0px;
  }

  .additional-section {
    margin-top: 40px;
  }

  .toggle-button {
    width: 320px;
    height: 67px;
    flex-shrink: 0;
    border-radius: 63.599px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 18px;
  }

  .toggle {
    width: 151px;
    height: 57px;
    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16.714px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  }

  .recomended {
    flex-shrink: 0;
    border-radius: 38px;
    background: #9155fd;
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 0px;
    flex-direction: column;
  }

  .base-2 {
    /* height: 486px;/ */

    border-radius: 38px;
    background: #fff;
    position: relative;
    top: 20px;
  }

  .ml-40 {
    margin-left: 40px;
  }
}

/* Media Query for low resolution  Tablets, Ipads */
@media (min-width: 481px) and (max-width: 767px) {
  .centered {
    position: fixed;
  }

  .parent .image1 {
    display: none;
  }
}

/* Media Query for Tablets Ipads portrait mode */
@media (min-width: 768px) and (max-width: 1024px) {
  /* .centered {
        position: fixed;
    } */

  .parent .image2 {
    display: none;
  }
}

/* Media Query for Laptops and Desktops */
@media (min-width: 1025px) and (max-width: 1280px) {
  .mobile-main {
    display: none;
  }
}

/* Media Query for Large screens */
@media (min-width: 1281px) {
  .mobile-main {
    display: none;
  }
}

.parent {
  position: relative;
  top: 0;
  left: 123px;
  margin-top: 70px;
}

.image1 {
  position: relative;
  top: 0;
  left: 0;
}

.hero-section {
  position: absolute;
  top: 14px;
}

.centered {
  position: relative;
  bottom: 0;
}
</style>