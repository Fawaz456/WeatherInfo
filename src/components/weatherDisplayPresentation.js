import React from "react";
import {
  Container,
  Typography,
  Grid,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import "./weatherDisplay.css";
import backImage1 from "../assets/imgs/cloudy.jpg";
import backImage2 from "../assets/imgs/night.jpg";
import backImage3 from "../assets/imgs/sunny.jpg";
import CloudIcon from "@material-ui/icons/Cloud";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";
const WeatherDisplayPresentation = (props) => {
  return (
    <>
      {props.open ? (
        <Backdrop open={props.open}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Container
          className={["backgroundImg", "textStyle"]}
          style={{
            background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)),url(${
              props.main === "Clear"
                ? backImage3
                : props.main === "Clouds"
                ? backImage1
                : backImage2
            })`,
          }}
          maxWidth="sm"
        >
          <Grid className={"gridStyle"}>
            {props.main === "Clear" ? (
              <WbSunnyIcon className={"iconStyle"} />
            ) : props.main === "Clouds" ? (
              <CloudIcon className={"iconStyle"} />
            ) : (
              <NightsStayIcon className={"iconStyle"} />
            )}
          </Grid>
          <Grid>
            <Typography className={"textStyle"} variant="h2">
              {props.temperature}&#8451;
            </Typography>
          </Grid>
          <Grid>
            <Typography className={"textStyle"} variant="body1">
              {props.weatherDescription}
            </Typography>
          </Grid>
          <Grid className={"cityName"}>
            <Typography className={"textStyle"} variant="overline">
              {props.cityName}
            </Typography>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default WeatherDisplayPresentation;
