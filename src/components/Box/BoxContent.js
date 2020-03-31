import React from 'react';
import {node, oneOfType, arrayOf} from 'prop-types';

const BoxContent = ({children}) => {
  return <div className="box-content">{children}</div>;
};

BoxContent.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};
export default BoxContent;
