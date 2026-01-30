import WeatherWidget from "./components/WeatherWidget";

export default function App() {
  return (
    <>
      <div className="min-h-dvh bg-[#F6F6F6] flex items-center justify-center">
        <WeatherWidget
          location={{
            lat: 43.9986,
            lon: 10.4289,
          }}
        />
      </div>
    </>
  );
}
