import { useWeather } from "../hooks/useWeather";

export default function CurrentWeather({ lat, lon }) {
  const { data, loading, error } = useWeather(lat, lon);
  if (loading) return <p>Loading current weather...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <div className="grid grid-cols-2 gap-4 items-center justify-items-center rounded-lg px-8 py-5 md:py-0">
        <div className="text-start">
          <p className="text-8xl text-[#313A52] font-bold">
            {data?.current?.main?.temp?.toFixed(0)}°
          </p>
          <p className="text-sm md:text-lg font-semibold text-gray-300">
            {data?.current?.name}, {" " + data?.current?.sys?.country}
          </p>
        </div>
        <img
          className="w-full"
          src={`https://openweathermap.org/img/wn/${data?.current?.weather?.[0]?.icon}@4x.png`}
          alt="weather icon"
          draggable="false"
        />
      </div>
    </>
  );
}
