import { useWeather } from "../hooks/useWeather";

export default function HourlyWeather({ lat, lon }) {
  const { data, loading, error } = useWeather(lat, lon);
  if (loading) return <p>Loading hourly weather...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <div className="flex gap-4 w-full h-full items-center justify-evenly">
        {data?.forecast?.list?.slice(0, 5).map((item) => (
          <div
            key={item.dt}
            className="flex flex-col items-center justify-center h-full text-[#313A52]"
          >
            <p className="font-semibold">{item.main.temp.toFixed(0)}°</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
              alt="weather icon"
              draggable="false"
            />
            <p className="font-semibold flex flex-col items-center">
              {(() => {
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
              })()}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
