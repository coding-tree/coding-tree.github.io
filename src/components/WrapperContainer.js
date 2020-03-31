import React from 'react';
import {node, object} from 'prop-types';

const WrapperContainer = ({children, motive}) => {
  return (
    <div style={motive} className="container">
      {children}
    </div>
  );
};

WrapperContainer.propTypes = {
  children: node.isRequired,
  motive: object.isRequired,
};

export default WrapperContainer;
