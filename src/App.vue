<template>
  <div id="app">
    <section class="splash">
      <div class="loading" v-if="$store.state.isLoading">
        Loading...
      </div>
      <v-alert v-model="$store.state.hasError" type="error" color="#ff5252">
        {{ $store.state.errorString }}
      </v-alert>
      <div class="backdrop"></div>
      <router-view />
    </section>
  </div>
</template>

<style>
#app {
  font-family: "San Francisco", -apple-system, system-ui, BlinkMacSystemFont,
    "Helvetica", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* SPLASH */
.splash {
  background-image: url("assets/maps.svg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  min-height: 700px;
  position: relative;
  background-position: center;
  text-align: center;
}
.splash_container {
  padding-top: 100px;
}
.splash_container h4 {
  margin-top: 20px;
}
.app_store_badge {
  margin-top: 50px;
}
.app_store_badge a img {
  width: 200px;
}
.text_link_module {
  margin-top: 120px;
}
.text_link_form > .success,
.text_link_form > .error {
  display: none;
}
.text_link_form.success > .success,
.text_link_form.error > .error {
  display: block;
  margin-top: 5px;
}
.text_link_form.success .input_container {
  display: none;
}
.text_link_form > .success {
  color: #00b900;
}
.text_link_form > .error {
  color: #ed384e;
}
.text_link_module h4 {
  margin-bottom: 20px;
}
.text_link_form {
  max-width: 455px;
  margin: 10px auto 0;
  display: flex;
  flex-flow: column;
}
.text_link_form button {
  flex-shrink: 0;
  margin-left: 10px;
}
.text_link_form input {
  flex: auto;
}
.phone_mock {
  width: 100%;
  max-width: 900px;
  position: absolute;
  bottom: -90px;
  left: 50%;
  margin-left: -450px;
}
</style>
