import React from 'react';
import {oneOfType, arrayOf, node} from 'prop-types';

const BoxInfo = ({children}) => {
  return <div className="box-info">{children}</div>;
};

BoxInfo.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default BoxInfo;
