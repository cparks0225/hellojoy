<template>
  <div>
    <h1>Welcome, who's mental health are we monitoring today?</h1>
    <User
      v-for="user in $store.state.login.users"
      :user="user"
      :key="user.userId"
    />
  </div>
</template>

<script>
import User from "@/components/User.vue";

export default {
  name: "login",
  data() {
    return {};
  },
  components: {
    User
  },
  methods: {
    login() {
      this.$store.commit("login");
    }
  }
};
</script>
