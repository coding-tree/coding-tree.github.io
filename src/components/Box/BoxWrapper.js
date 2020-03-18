import React from 'react';
import {node, oneOfType, arrayOf} from 'prop-types';

const BoxWrapper = ({children}) => {
  return <div className="box-wrapper">{children}</div>;
};

BoxWrapper.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};
export default BoxWrapper;
