<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="bg-grey-lighten-4 py-16">
      <v-container>
        <v-row>
          <v-col cols="12" md="8">
            <h1 class="text-h2 font-weight-bold mb-4">
              Industry Insights & News
            </h1>
            <p class="text-h6">
              Stay informed with the latest trends, research, and success stories in product sampling and brand activation.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Featured Article -->
    <v-container class="py-16">
      <v-row>
        <v-col cols="12">
          <v-card class="featured-article">
            <v-row>
              <v-col cols="12" md="6">
                <v-img
                  :src="featuredArticle.image"
                  height="400"
                  cover
                >
                  <template v-slot:placeholder>
                    <PlaceholderImage 
                      :height="400"
                      :bgColor="colors.PRIMARY"
                    />
                  </template>
                </v-img>
              </v-col>
              <v-col cols="12" md="6" class="d-flex flex-column justify-center">
                <v-card-item>
                  <v-chip color="primary" class="mb-4">Featured</v-chip>
                  <v-card-title class="text-h3 mb-4">{{ featuredArticle.title }}</v-card-title>
                  <v-card-subtitle class="mb-4">{{ featuredArticle.date }}</v-card-subtitle>
                  <v-card-text class="text-body-1 mb-4">{{ featuredArticle.excerpt }}</v-card-text>
                  <v-btn color="primary" variant="flat">Read More</v-btn>
                </v-card-item>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Articles Grid -->
    <v-container fluid class="bg-grey-lighten-4 py-16">
      <v-container>
        <!-- Categories Filter -->
        <v-row class="mb-8">
          <v-col cols="12">
            <v-chip-group
              v-model="selectedCategory"
              selected-class="primary"
            >
              <v-chip
                v-for="category in categories"
                :key="category"
                filter
              >
                {{ category }}
              </v-chip>
            </v-chip-group>
          </v-col>
        </v-row>

        <!-- Articles -->
        <v-row>
          <v-col
            v-for="article in articles"
            :key="article.title"
            cols="12"
            md="4"
          >
            <v-card height="100%" class="d-flex flex-column">
              <v-img
                :src="article.image"
                height="200"
                cover
              >
                <template v-slot:placeholder>
                  <PlaceholderImage 
                    :height="200"
                    :bgColor="colors.SECONDARY"
                  />
                </template>
              </v-img>
              <v-card-item class="flex-grow-1 d-flex flex-column">
                <v-chip size="small" color="primary" class="mb-2">{{ article.category }}</v-chip>
                <v-card-title class="text-h5 mb-2">{{ article.title }}</v-card-title>
                <v-card-subtitle class="mb-2">{{ article.date }}</v-card-subtitle>
                <v-card-text class="flex-grow-1">{{ article.excerpt }}</v-card-text>
                <v-card-actions>
                  <v-btn variant="text" color="primary">Read More</v-btn>
                </v-card-actions>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>

        <!-- Pagination -->
        <v-row class="mt-8">
          <v-col cols="12" class="text-center">
            <v-pagination
              v-model="page"
              :length="3"
              rounded="circle"
            ></v-pagination>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Newsletter Signup -->
    <v-container class="py-16">
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h2 class="text-h3 font-weight-bold mb-4">Stay Informed</h2>
          <p class="text-h6 mb-8">
            Subscribe to our newsletter for the latest insights and industry trends.
          </p>
          <v-row justify="center">
            <v-col cols="12" md="8">
              <v-form @submit.prevent="subscribeNewsletter">
                <v-row>
                  <v-col cols="12" md="8">
                    <v-text-field
                      v-model="email"
                      label="Email Address"
                      type="email"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-btn
                      color="primary"
                      block
                      height="56"
                      type="submit"
                    >
                      Subscribe
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { IMAGES, PLACEHOLDER_COLORS } from '@/constants/images'
import PlaceholderImage from '@/components/PlaceholderImage.vue'

export default {
  name: 'Insights',
  components: {
    PlaceholderImage
  },
  data: () => ({
    images: IMAGES,
    colors: PLACEHOLDER_COLORS,
    page: 1,
    email: '',
    selectedCategory: null,
    categories: ['All', 'Industry Trends', 'Case Studies', 'Research', 'News'],
    featuredArticle: {
      title: 'The Future of Product Sampling in a Digital World',
      date: 'March 15, 2024',
      image: IMAGES.INSIGHTS.FEATURED,
      excerpt: 'Discover how digital transformation is revolutionizing the product sampling industry and creating new opportunities for brand engagement.'
    },
    articles: [
      {
        title: 'Maximizing ROI in Sampling Campaigns',
        date: 'March 10, 2024',
        category: 'Research',
        image: IMAGES.INSIGHTS.ARTICLES.ARTICLE1,
        excerpt: 'Learn key strategies to measure and optimize the return on investment for your sampling programs.'
      },
      {
        title: 'Sustainable Sampling Practices',
        date: 'March 5, 2024',
        category: 'Industry Trends',
        image: IMAGES.INSIGHTS.ARTICLES.ARTICLE2,
        excerpt: 'Explore eco-friendly approaches to product sampling that align with consumer values.'
      },
      {
        title: 'Building Brand Loyalty Through Sampling',
        date: 'February 28, 2024',
        category: 'Case Studies',
        image: IMAGES.INSIGHTS.ARTICLES.ARTICLE3,
        excerpt: 'See how strategic sampling programs can create lasting customer relationships.'
      }
    ]
  }),
  methods: {
    subscribeNewsletter() {
      // Implement newsletter subscription logic
      console.log('Subscribe:', this.email)
      this.email = ''
    }
  }
}
</script>

<style scoped>
.featured-article {
  overflow: hidden;
}
</style> 