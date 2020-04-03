import React from 'react';
import {node, object} from 'prop-types';

const WrapperContainer = ({children}) => {
  return <div className="container">{children}</div>;
};

WrapperContainer.propTypes = {
  children: node.isRequired,
};

export default WrapperContainer;
