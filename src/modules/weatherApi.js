import axios from "axios";

export const getWeather = async (latitude, longitude) => {
  let response;
  try {
    response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${"427525f87b8d41c7187db353a4d6dde1"}`
    );
  } catch (e) {
    response = e.response;
  } finally {
    return response;
  }
};
