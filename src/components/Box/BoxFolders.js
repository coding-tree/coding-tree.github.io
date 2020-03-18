import React from 'react';
import {oneOfType, arrayOf, node} from 'prop-types';

const BoxFolders = ({children}) => {
  return <div className="box-folders">{children}</div>;
};

BoxFolders.propTypes = {
  children: oneOfType([arrayOf(node), node]),
};

export default BoxFolders;
