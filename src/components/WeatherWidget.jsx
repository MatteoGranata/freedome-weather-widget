import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";
import HourlyWeather from "./HourlyWeather";
import SwipeContainer from "./SwipeContainer";

export default function WeatherWidget({location}) {
  const { lat, lon } = location;
  return (
    <>
      <div className="max-w-[90vw] md:max-w-xl bg-white mx-auto rounded-4xl  shadow-xl overflow-hidden">
        <SwipeContainer>
          <CurrentWeather lat={lat} lon={lon} />
          <DailyWeather lat={lat} lon={lon} />
          <HourlyWeather lat={lat} lon={lon} />
        </SwipeContainer>
      </div>
    </>
  );
}
