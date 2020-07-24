import React from "react";
import {
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Card,
  ListItemText,
} from "@material-ui/core";
import "./weatherDaily.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CloudIcon from "@material-ui/icons/Cloud";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import CircularProgress from "../circularProgress/circularProgress";
const WeatherDailyPresentation = (props) => {
  return (
    <>
      {props.open ? (
        <CircularProgress open={props.open} />
      ) : (
        <Container maxWidth={"sm"} className={"contStyle"}>
          <Grid>
            <ArrowBackIosIcon onClick={() => props.goBack()} />
          </Grid>
          {Object.keys(props.currentData).length > 0 ? (
            <Grid className={"cardStyle"}>
              <Card className={"cardStyle"}>
                <Typography>
                  {new Date(props.currentData.dt * 1000).toDateString()}
                </Typography>
                <ListItem>
                  <ListItemText>
                    {parseInt(props.currentData.temp - 273.15, 10)}&#8451;
                  </ListItemText>
                  <ListItemAvatar>
                    {props.currentData.weather[0].main === "Clear" ? (
                      <WbSunnyIcon className={"sunny"} />
                    ) : props.currentData.weather[0].main === "Clouds" ? (
                      <CloudIcon className={"cloud"} />
                    ) : (
                      <NightsStayIcon className={"rain"} />
                    )}
                    &nbsp;{props.currentData.weather[0].main}
                  </ListItemAvatar>
                </ListItem>
                <Typography variant="body1">
                  {props.currentData.weather[0].description}
                </Typography>
              </Card>
            </Grid>
          ) : null}
          <Typography>For next 7 Days</Typography>
          <List>
            {props.dialyData.map((item, index) => {
              if (index !== 0) {
                return (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      {item.weather[0].main === "Clear" ? (
                        <WbSunnyIcon className={"sunny"} />
                      ) : item.weather[0].main === "Clouds" ? (
                        <CloudIcon className={"cloud"} />
                      ) : (
                        <NightsStayIcon className={"rain"} />
                      )}
                      <ListItemText>
                        {parseInt(item.temp.day - 273.15, 10)}&#8451;
                      </ListItemText>
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.weather[0].main}
                      secondary={item.weather[0].description}
                    />
                    <ListItemAvatar>
                      {new Date(item.dt * 1000).getDay() === 0
                        ? "Sun"
                        : new Date(item.dt * 1000).getDay() === 1
                        ? "Mon"
                        : new Date(item.dt * 1000).getDay() === 2
                        ? "Tue"
                        : new Date(item.dt * 1000).getDay() === 3
                        ? "Wed"
                        : new Date(item.dt * 1000).getDay() === 4
                        ? "Thu"
                        : new Date(item.dt * 1000).getDay() === 5
                        ? "Fri"
                        : "Sat"}
                    </ListItemAvatar>
                  </ListItem>
                );
              }
            })}
          </List>
        </Container>
      )}
    </>
  );
};

export default WeatherDailyPresentation;
