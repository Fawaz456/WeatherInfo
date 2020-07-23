import React, { useState, useEffect } from "react";
import WeatherDisplayPresentation from "./weatherDisplayPresentation";
import { getWeather } from "../modules/weatherApi";
const WeatherDisplayContainer = (props) => {
  const [cityName, setCityName] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");
  const [temperature, setTemperature] = useState("");
  const [main, setMain] = useState("");
  const [openBackDrop, setOpenBackDrop] = useState(true);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        await getWeather(
          position.coords.latitude,
          position.coords.longitude
        ).then((res) => {
          if (res.status === 200) {
            setOpenBackDrop(false);
            setCityName(res.data.name);
            setWeatherDescription(res.data.weather[0].description);
            setTemperature(parseInt(res.data.main.temp - 273.15), 10);
            setMain(res.data.weather[0].main);
          } else {
            setOpenBackDrop(false);
            alert("some error");
          }
        });
      },
      (err) => {
        setOpenBackDrop(false);
        alert("Error Getting Location");
      }
    );
  }, []);
  return (
    <WeatherDisplayPresentation
      cityName={cityName}
      weatherDescription={weatherDescription}
      temperature={temperature}
      main={main}
      open={openBackDrop}
    />
  );
};

export default WeatherDisplayContainer;
