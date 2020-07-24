import React, { useState, useEffect } from "react";
import WeatherDisplayPresentation from "./weatherDisplayPresentation";
import { getWeather } from "../../modules/weatherApi";
import { useHistory } from "react-router-dom";
const WeatherDisplayContainer = (props) => {
  const history = useHistory();
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
            alert("Error fetching weather");
          }
        });
      },
      (err) => {
        setOpenBackDrop(false);
        alert("Allow location access");
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
      goToDaily={() => history.push("/daily")}
    />
  );
};

export default WeatherDisplayContainer;
