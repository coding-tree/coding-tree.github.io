import React from "react";
import { node } from "prop-types";

const WrapperContainer = ({ children, motive }) => {
  return (
    <div style={motive} className="container">
      {children}
    </div>
  );
};

WrapperContainer.propTypes = {
  children: node.isRequired
};

export default WrapperContainer;
