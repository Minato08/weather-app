import axios from 'axios'

// actions
export default {
  // Actions here...
  fetchWeather: async ({ state, commit }, city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.weatherAppId}`)
      commit('fillWeatherDetails', response.data)
    } catch (error) {
      alert('City not found. Please enter a valid city.')
    }
  }
}
