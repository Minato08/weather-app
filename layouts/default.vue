<template>
  <v-app>
    <div>
      <v-toolbar
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-app-bar-nav-icon />
        <v-toolbar-title>WELCOME TO WEATHER APP</v-toolbar-title>
        <v-spacer />
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text>
            <nuxt-link to="/weather-app">
              Weather App
            </nuxt-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; Learning Weather. {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Weather App',
      fixed: false
    }
  }
}
</script>

<style>
a, a:visited, a:active {
  text-decoration: none;
  color: white;
}
</style>
