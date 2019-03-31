<template>
  <div>
    <h1>Welcome, who's mental health are we monitoring today?</h1>
    <User v-for="user in users" :user="user" />
  </div>
</template>

<script>
import User from "@/components/User.vue"

export default {
  name: "login",
  data() {
    return {
      users: [
        {
          name: 'Frank Smith',
          logo: 0,
          userId: '5c86be20340000e21389c26b'
        },
        {
          name: 'Jane Doe',
          logo: 30,
          userId: '5c7164773500007000e9e82a'
        }
      ]
    }
  },
  components: {
    User
  },
  methods: {
    login() {
      this.$store.commit('login', )
    }
  }
}
</script>
