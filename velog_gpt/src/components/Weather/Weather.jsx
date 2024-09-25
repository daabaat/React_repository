import { useState, useEffect } from "react";

export default function Weather() {
  const [weather, setWeather] = useState();

  function getLocation() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const pos = position.coords;
        // console.log(pos);
        // console.log(pos.latitude);
        // console.log(pos.longitude);
        const key = import.meta.env.VITE_WEATHER_API_KEY;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${pos.latitude}&lon=${pos.longitude}&appid=aa908b0df6f19581e003ef1c53a4ec4a&units=metric`
        );

        const data = await response.json();

        setWeather({
          temp: data.main.temp,
          humidity: data.main.humidity,
          city: data.name,
        });
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  useEffect(() => {
    getLocation();
  }, []);

  console.log(weather);

  return (
    <div>
      {/* {weather ? (
              <div>
                <h1>날씨 정보</h1>
                <p>위치: {weather.city}</p>
                <p>온도: {weather.temp}°C</p>
                <p>습도: {weather.humidity}%</p>
              </div>
            ) : (
              <p>날씨 정보 불러오는중 ... </p>
            )} */}

      {/* 옵셔널 체이닝 */}
      <div>
        <h1>날씨 정보</h1>
        <p>위치: {weather?.city ?? "로딩중"}</p>
        <p>온도: {weather?.temp ?? "로딩중"}°C</p>
        <p>습도: {weather?.humidity ?? "로딩중"}%</p>
      </div>
    </div>
  );
}
