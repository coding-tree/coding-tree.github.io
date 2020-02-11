import React from 'react';
import {node} from 'prop-types';

function TreeItems({children}) {
  return <React.Fragment>{children}</React.Fragment>;
}

TreeItems.propTypes = {
  children: node.isRequired,
};

export default TreeItems;
