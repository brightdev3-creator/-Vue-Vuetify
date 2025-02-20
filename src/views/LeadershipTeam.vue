<template>
  <div>
    <v-container fluid class="bg-grey-lighten-4 py-16">
      <v-container>
        <h1 class="text-h2 font-weight-bold mb-4">Leadership Team</h1>
        <p class="text-h6 mb-8">
          Meet our dedicated leadership team driving our vision forward.
        </p>
        <div 
          v-for="member in leadershipTeam" 
          :key="member.name" 
          class="d-flex align-center mb-8"
        >
          <v-avatar size="100" class="mr-4">
            <v-img :src="member.image"></v-img>
          </v-avatar>
          <div>
            <h2 class="text-h5 font-weight-bold mb-1">{{ member.name }}</h2>
            <h3 class="text-subtitle-1 mb-2">{{ member.title }}</h3>
            <p>{{ member.bio }}</p>
          </div>
        </div>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import { withBase } from '@/utils/paths'

export default {
  name: 'LeadershipTeam',
  data() {
    return {
      leadershipTeam: [
        {
          name: 'Andrew Therrien',
          title: 'Vice President of Business Development',
          image: withBase('/images/leadership/AndrewTherrian.jpg'),
          bio:
            "Since joining Samplers in 2012, Andrew has played a key role in growing and managing national retail accounts, club activations, agency relations, and brand partnerships. With a client-centered approach, he ensures successful outcomes across the entire retail ecosystem. Andrew sets Samplers apart by fostering strong relationships with retailers, brokers, distributors, agencies, merchandisers, and brands, driving seamless collaboration and impactful results."
        },
        {
          name: 'Ashley Hann',
          title: 'Director of People Operations-HR',
          image: withBase('/images/leadership/AshleyHann.jpg'),
          bio:
            "Ashley leads the People Operations team with expertise in compliance, employment law, talent acquisition, and employee engagement. Dedicated to building strong teams and fostering a positive work culture, she ensures seamless operations while aligning HR strategies with company goals. With a people-first approach, Ashley focuses on optimizing processes, maintaining compliance, and enhancing employee experience to drive organizational success."
        },
        {
          name: 'Christopher Bennett',
          title: 'Executive Vice President',
          image: withBase('/images/leadership/ChristopherBennett.jpg'),
          bio:
            "As the Executive Vice President, Christopher is a dynamic leader who drives business success through strategic oversight of sales, client relations, human resources, and financial management. With a deep expertise in building and nurturing client relationships, he excels in executing in-store promotional campaigns across the alcohol, automotive, and consumer packaged goods (CPG) sectors. A trailblazer in promotional industry innovation, Christopher designs and implements tools to track execution compliance, ensuring seamless program delivery and meeting all key performance indicators for all clients. He leads comprehensive training and development initiatives for both field and internal teams, fostering a culture of excellence and continuous improvement."
        },
        {
          name: 'Darren Vance',
          title: 'Vice President of Business Development',
          image: withBase('/images/leadership/DarrenVance.jpg'),
          bio:
            "With over 20 years of experience in client relationship management, retail account oversight, and business development, Darren specializes in driving growth and fostering strong partnerships. His expertise spans CPG relationship management, program development, and operational strategy. As a leader in national retail account management, Darren is dedicated to expanding client relationships, optimizing programs, and ensuring sustained success."
        },
        {
          name: 'Nicole Centonze',
          title: 'Client Services Manager',
          image: withBase('/images/leadership/NicoleCentonze.jpg'),
          bio:
            "With a background in public relations, marketing, and event planning, Nicole serves as the Client Services Manager, ensuring seamless events and exceptional client experiences. Acting as the key liaison between clients and event specialists, she provides guidance, support, and oversight of internal employee inquiries. Nicole also collaborates with sales and business teams to facilitate smooth client transitions, leveraging her expertise to address client needs and build lasting partnerships."
        }
      ]
    }
  },
  
}
</script>

<style scoped>
/* Additional component-specific styles */
.v-card {
  margin-bottom: 1.5rem;
}
</style> 