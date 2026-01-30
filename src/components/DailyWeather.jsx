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
      <div className="flex gap-4 w-full h-full items-center justify-evenly">
        {dailyForecast?.map((item) => (
          <div
            key={item.dt}
            className="flex flex-col items-center justify-center h-full text-[#313A52]"
          >
            <p className="font-semibold">{Math.round(item.main.temp)}°</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
              alt="weather icon"
              draggable="false"
            />
            <p className="font-semibold flex flex-col items-center">
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
