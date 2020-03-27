import React from "react";
import { node } from "prop-types";

const MainWrapper = ({ children }) => {
  return <main>{children}</main>;
};

MainWrapper.propTypes = {
  children: node.isRequired
};

export default MainWrapper;
