import { useWeather } from "../hooks/useWeather";

export default function HourlyWeather({ lat, lon }) {
  const { data, loading, error } = useWeather(lat, lon);
  if (loading) return <p>Loading hourly weather...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <div>
        {data?.forecast?.list?.slice(0, 5).map((item) => (
          <div key={item.dt}>
            <p>{item.main.temp.toFixed(0)}°</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
              alt="weather icon"
              draggable="false"
            />
            <p>
              {() => {
                const date = new Date(item.dt_txt);
                const timeString = date.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                });
                const [time, ampm] = timeString.split(" ");
                return (
                  <>
                    {time}
                    <span className="text-[.6rem] font-medium text-gray-300">
                      {ampm}
                    </span>
                  </>
                );
              }}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
