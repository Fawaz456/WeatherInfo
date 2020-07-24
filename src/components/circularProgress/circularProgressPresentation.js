import React from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";
const CircularProgressPresentation = (props) => {
  return (
    <Backdrop open={props.open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default CircularProgressPresentation;
