<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 mod4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="lighten-2 grey">
                <img :src="person.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text class="subheading">{{ person.name }}</v-card-text>
            <v-card-text class="grey--text">{{ person.role }}</v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: 'The Net Ninja',
          role: 'Web developer',
          avatar: '/avatar-1.png'
        },
        { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png' },
        { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png' },
        {
          name: 'Gouken',
          role: 'Social media maverick',
          avatar: '/avatar-4.png'
        },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png' }
      ]
    }
  }
}
</script>
