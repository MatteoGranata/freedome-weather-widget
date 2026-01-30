import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeatherData = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: API_KEY,
    units: "metric",
    lang: "it",
  },
});

export const getCurrentWeather = (lat, lon) =>
  fetchWeatherData.get("/weather", { params: { lat, lon } });
export const getForecastWeather = (lat, lon) =>
  fetchWeatherData.get("/forecast", { params: { lat, lon } });
