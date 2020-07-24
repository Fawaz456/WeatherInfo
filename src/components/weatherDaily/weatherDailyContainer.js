import React, { useState, useEffect } from "react";
import WeatherDailyPresentation from "./weatherDailyPresentation";
import { getWeatherDaily } from "../../modules/weatherApi";
import { useHistory } from "react-router-dom";
const WeatherDailyContainer = (props) => {
  const history = useHistory();
  const [dialyData, setDialyData] = useState([]);
  const [currentData, setCurrentData] = useState({});
  const [openBackDrop, setOpenBackDrop] = useState(true);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        await getWeatherDaily(
          position.coords.latitude,
          position.coords.longitude
        ).then((res) => {
          if (res.status === 200) {
            setOpenBackDrop(false);
            setDialyData(res.data.daily);
            setCurrentData(res.data.current);
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
    <WeatherDailyPresentation
      goBack={() => history.push("/")}
      dialyData={dialyData}
      currentData={currentData}
      open={openBackDrop}
    />
  );
};

export default WeatherDailyContainer;
