<template>
  <div class="user">
    <div @click="loginUser()">
      <UserLogo :hueRotate="user.logo" />
      <h1>{{ user.name }}</h1>
    </div> 
  </div>
</template>

<script>
import UserLogo from '@/components/UserLogo'

export default {
  name: "User",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  components: {
    UserLogo
  },
  computed: {
    userQuestions() {
      return `/questions/${this.user.userId}`
    }
  },
  methods: {
    loginUser(user) {
      this.$store.commit('login', this.user)
      this.$router.push({
        name: 'Questions',
        params: {
          id: this.$store.state.login.currentUser.userId
        }
      })
    }
  }
}
</script>

<style scoped>
h1 {
  margin-top: 0em;
  margin-bottom: 1em;
}
img, h1 {
  cursor: pointer;
}
</style>