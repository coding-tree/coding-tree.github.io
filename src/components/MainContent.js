import React from 'react';
import {node} from 'prop-types';

function MainContent({children}) {
  return <div className="description">{children}</div>;
}

MainContent.propTypes = {
  children: node,
};

export default MainContent;
