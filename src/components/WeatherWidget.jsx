import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";
import HourlyWeather from "./HourlyWeather";
import SwipeContainer from "./SwipeContainer";

export default function WeatherWidget() {
  const coords = { lat: 40.7128, lon: -74.006 }; // Example coordinates (New York City)

  const { lat, lon } = coords;
  return (
    <>
      <div>
        <SwipeContainer>
          <CurrentWeather lat={lat} lon={lon} />
          <DailyWeather lat={lat} lon={lon} />
          <HourlyWeather lat={lat} lon={lon} />
        </SwipeContainer>
      </div>
    </>
  );
}
