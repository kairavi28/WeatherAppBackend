import mongoose from "mongoose";
const WeatherSchema = new mongoose.Schema({
  city: String,
  country: String,
  temperatureC: Number,
  temperatureF: Number,
  humidity: Number,
  main: String,
  icon: String,
  date: { type: Date, default: Date.now }
});

const Weather = mongoose.model('Weather', WeatherSchema);

export default Weather;