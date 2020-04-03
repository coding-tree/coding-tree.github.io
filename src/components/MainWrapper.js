import React from 'react';
import {node} from 'prop-types';

const MainWrapper = ({children, motive}) => {
  return <main style={motive}>{children}</main>;
};

MainWrapper.propTypes = {
  children: node.isRequired,
};

export default MainWrapper;
