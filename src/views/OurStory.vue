<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="bg-grey-lighten-4 py-16">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="8">
            <h1 class="text-h2 font-weight-bold mb-4">Our Story</h1>
            <p class="text-h6">
              For over 30 years, we've been delivering innovative promotional marketing solutions that drive brand growth through authentic human connections.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Founder's Story -->
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" md="8">
          <h2 class="text-h3 font-weight-bold mb-6">David Bellenoit – Our Founder's Story</h2>
          <div class="text-h5 mb-8">
            "This all began with throwing fights in bars to sell more beer. Hold on, let's back up a second."
          </div>
          <div class="text-body-1">
            <p class="mb-4">
              In the 90s, I was a struggling actor in Boston, hustling to make rent like so many others. Hustle culture was the name of the game, and the more you hustle, the more opportunities you created for yourself.
            </p>
            <p class="mb-4">
              One day, I auditioned for an ad that called for someone who could do a British accent. I landed the gig and soon found myself in bars and pubs around Boston performing a little piece of surprise "guerrilla theater" that would unknowingly become my entry into the world of experiential marketing.
            </p>
            <p class="mb-4">
              What started as "Hey Dave, can you do this?" became "Hey Dave's team" and, finally, an official business. Over the years, we've grown from small bar stunts to large-scale, multi-city brand activations, to multi-state in-store sampling demonstrations.
            </p>
            <p class="mb-4">
              Today, after 30 years, experiential marketing has changed. The tools are fancier, the data more precise, and the expectations higher. But the heart of it is still the same: face-to-face, human connection. That's what people crave. That's what I've spent my career perfecting.
            </p>
          </div>
          <v-btn
            color="primary"
            size="large"
            class="mt-6"
            @click="showFullStory = true"
          >
            Read Full Story
          </v-btn>
        </v-col>
        <v-col cols="12" md="4" class="d-flex justify-center align-center">
          <v-img
            :src="withBase('/images/david.jpg')"
            width="300"
            height="300"
            class="rounded-circle elevation-3"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </v-container>

    <!-- Full Story Dialog -->
    <v-dialog v-model="showFullStory" max-width="800">
      <v-card>
        <v-card-title class="text-h4 pa-6">
          David Bellenoit – Our Founder's Story
          <v-btn icon="mdi-close" variant="text" @click="showFullStory = false" class="float-right"></v-btn>
        </v-card-title>
        <v-card-text class="pa-6">
          <p class="mb-4">This all began with throwing fights in bars to sell more beer. Hold on, let's back up a second.</p>
          <p class="mb-4">In the 90s, I was a struggling actor in Boston, hustling to make rent like so many others. Hustle culture was the name of the game, and the more you hustle, the more opportunities you created for yourself.</p>
          <p class="mb-4">One day, I auditioned for an ad that called for someone who could do a British accent. I landed the gig and soon found myself in bars and pubs around Boston performing a little piece of surprise "guerrilla theater" that would unknowingly become my entry into the world of experiential marketing.</p>
          <p class="mb-4">Here's how it worked: Two guys would be planted in the bar on a busy night. A third person, a woman, would walk in and loudly announce, "I've a singing telegram for Nigel! Is there a Nigel here?" One of the two plants would respond, "Yes, that's probably me. My name is Nigel." The woman would then approach him, presenting a Bass Ale bottle tied to a balloon. "This is from your girlfriend, Matilda," she'd say, before singing, "Happy birthday to you, this Bass Ale's for you!"</p>
          <p class="mb-4">The crowd, naturally intrigued, would watch and offer polite applause. Then the second plant would stir things up. "Oi, mate, I think that's my Bass Ale," he'd shout. "My girlfriend's name is Matilda and I'm Nigel!"</p>
          <p class="mb-4">What followed was a perfectly choreographed argument that escalated in intensity as the two "Nigels" debated who were the rightful recipient of the Bass Ale. The crowd, now fully captivated, watched in confusion and amusement. Just when it seemed like punches were about to be thrown, one of the "Nigels" would pause and say, "What are we fighting for, mate? There's Bass Ale here tonight for everyone!"</p>
          <p class="mb-4">Cue the reveal: "Ladies and gents, Bass Ale is on us tonight!" Applause erupted. The crowd, realizing they'd been watching a live commercial, loved it. Our crew, still in character, would mingle among the patrons, buying Bass Ales for anyone who wanted to try one.</p>
          <p class="mb-4">And that's how it all started — my first foray into experiential marketing. One-on-one, personal interactions talking about a product in a way that can't be replicated by print, TV, or digital ads. It's live, it's personal, and it's unforgettable.</p>
          <p class="mb-4">Over the years, I played roles, and hired others for roles such as computer scientist, chef, and dentist to promote national brands in shopping malls, stores, fairs, and anywhere crowds gathered. As I built a reputation as "Boston Dave," clients knew me as the guy who could round up performers with big personalities to bring brands to life. What started as "Hey Dave, can you do this?" became "Hey Dave's team" and, finally, an official business.</p>
          <p class="mb-4">The early days were risky. There's no playbook for "spontaneous public theater" as a business model. But I'd already learned that taking creative risks could lead to unforgettable moments — and those moments are what people remember most. So, I built the entire company around that philosophy.</p>
          <p class="mb-4">Over the years, we've grown from small bar stunts to large-scale, multi-city brand activations, to multi-state in-store sampling demonstrations. Our teams have brought larger-than-life ideas to life, sometimes with just a week's notice. We've had wins that felt like pure magic — ideas that, on paper, seemed impossible but somehow worked flawlessly in front of thousands of people. There have been tough times, too, moments when a stunt didn't hit quite right or when logistics became a nightmare. But even then, we always find a way to course-correct, because that's what you do when the show is live.</p>
          <p class="mb-4">At the heart of it all is one guiding belief: trust in the people you work with and for. Whether it's a client trusting us to execute a bold idea or me trusting my team to figure out how to make it happen, that belief is non-negotiable. Without it, none of this works.</p>
          <p class="mb-4">Today, after 30 years, I've seen how experiential marketing has changed. The tools are fancier, the data more precise, and the expectations higher. But the heart of it is still the same: face-to-face, human connection. That's what people crave. That's what I've spent my career perfecting. And I wouldn't have it any other way.</p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'OurStory',
  data: () => ({
    showFullStory: false
  }),
  methods: {
    withBase(path) {
      return import.meta.env.BASE_URL + path.replace(/^\//, '')
    }
  }
}
</script>

<style scoped>
.rounded-circle {
  border-radius: 50% !important;
}
</style> 