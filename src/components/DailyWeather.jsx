import { useWeather } from "../hooks/useWeather";

export default function DailyWeather({ lat, lon }) {
  const { data, loading, error } = useWeather(lat, lon);
  if (loading) return <p>Loading daily weather...</p>;
  if (error) return <p>{error}</p>;

  const dailyForecast = data?.forecast?.list
    ?.filter((item) => item.dt_txt.includes("12:00:00"))
    .slice(0, 5);

  return (
    <>
      <div>
        {dailyForecast?.map((item) => (
          <div key={item.dt}>
            <p>{Math.round(item.main.temp)}°</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
              alt="weather icon"
              draggable="false"
            />
            <p>
              {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
