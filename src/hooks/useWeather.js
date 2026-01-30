import { useEffect, useState } from "react";
import { getCurrentWeather, getForecastWeather } from "../services/weatherAPI";

export function useWeather(lat, lon) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!lat || !lon) return;
    async function fetchWeather() {
      try {
        setLoading(true);
        const [currentRes, ForecastRes] = await Promise.all([
          getCurrentWeather(lat, lon),
          getForecastWeather(lat, lon),
        ]);
        setData({ current: currentRes.data, forecast: ForecastRes.data });
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Failed to fetch weather data.");
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
  }, [lat, lon]);
  return { data, loading, error };
}
