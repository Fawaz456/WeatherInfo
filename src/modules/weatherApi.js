import axios from "axios";
const API_KEY = "API_KEY";
export const getWeather = async (latitude, longitude) => {
  let response;
  try {
    response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
  } catch (e) {
    response = e.response;
  } finally {
    return response;
  }
};

export const getWeatherDaily = async (latitude, longitude) => {
  let response;
  try {
    response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&
        exclude=${"hourly"},${"minutely"}&appid=${API_KEY}`
    );
  } catch (e) {
    response = e.response;
  } finally {
    return response;
  }
};
