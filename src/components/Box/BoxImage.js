import React from "react";
import { lightTheme } from "../themes";
import { object, string } from "prop-types";

const BoxImage = ({ motive, light = "box.svg", dark = "box_dark.svg" }) => {
  const changeImageBox = () => (motive === lightTheme ? light : dark);
  return <img src={"./" + changeImageBox()} alt="" />;
};

BoxImage.propTypes = {
  motive: object.isRequired,
  light: string.isRequired,
  dark: string.isRequired
};

export default BoxImage;
