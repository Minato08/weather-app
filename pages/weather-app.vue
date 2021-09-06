<template>
  <v-container>
    <h1 class="display-1 text-center mb-2">
      Weather App
    </h1>
    <v-flex x12>
      <v-card color="blue-grey darken-2">
        <v-card-text>
          <v-layout justify-center>
            <!-- CITY -->
            <v-flex class="text-center">
              <h4>Temperature</h4>
              <div v-if="getWeatherDetails">
                <h1 class="display-1">{{ getWeatherDetails.name }}</h1>
                <div v-for="weatherObj in getWeatherDetails.weather" :key="weatherObj.key">
                  <img :src="`https://openweathermap.org/img/w/${weatherObj.icon}.png`" alt="weather icon">
                  <p>
                    <span class="display-1">{{ getWeatherDetails.main.temp }} &deg;C</span>
                    <span class="caption ml-4">{{ weatherObj.description }}</span>
                  </p>
                </div>
              </div>
            </v-flex>

            <!-- WIND AND  PRESSURE -->
            <v-flex class="text-center">
              <h4>Wind &amp; Pressure</h4>
              <div v-if="getWeatherDetails">
                <p>
                  <span class="text-lg-h5">Wind: {{ getWeatherDetails.wind.speed }} m/s ({{ getWeatherDetails.wind.deg }} &deg;)</span>
                </p>
                <p>
                  <span class="text-lg-h6">Humidity: {{ getWeatherDetails.main.humidity }} %</span>
                </p>
                <p>
                  <span class="text-lg-h6">Pressure: {{ getWeatherDetails.main.pressure }} hPa</span>
                </p>
              </div>
            </v-flex>

            <!-- OTHERS -->
            <v-flex xs4 class="text-center">
              <h4>Other</h4>
              <div v-if="getWeatherDetails">
                <h3 class="headline mt-4">
                  <span class="text-lg-h5">Max Temperature: {{ getWeatherDetails.main.temp_max }} &deg;</span>
                </h3>
                <h3 class="headline mt-4">
                  <span class="text-lg-h5">Min Temperature: {{ getWeatherDetails.main.temp_min }} &deg;</span>
                </h3>
              </div>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 class="mt-4">
      <v-form @submit.prevent="fetchWeather(city)">
        <v-text-field
          v-model="city"
          label="Enter City Name"
          solo
        />
      </v-form>
    </v-flex>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      title: 'Weather',
      city: '',
      weather: {}
    }
  },
  computed: {
    ...mapGetters({
      getWeatherDetails: 'weather/getWeatherDetails'
    })
  },
  created () {
  },
  methods: {
    ...mapActions({
      fetchWeather: 'weather/fetchWeather'
    })
  }
}
</script>
