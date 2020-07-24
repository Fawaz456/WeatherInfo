import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import WeatherDisplay from "../src/components/weatherDisplay/weatherDisplay";
import WeatherDaily from "../src/components/weatherDaily/weatherDaily";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/daily">
          <WeatherDaily />
        </Route>
        <Route path="/">
          <WeatherDisplay />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
