import React from "react";
import CircularProgressPresentation from "./circularProgressPresentation";

const CircularProgressContainer = (props) => {
  return <CircularProgressPresentation open={props.open} />;
};

export default CircularProgressContainer;
