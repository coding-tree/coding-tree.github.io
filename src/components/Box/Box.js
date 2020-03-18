import React from 'react';
import {object, func, node, oneOfType, arrayOf} from 'prop-types';

const Box = ({children, motive, setSelectedElement}) => {
  const removeSelection = e => {
    e.target.className === 'box-folders' && setSelectedElement(null);
  };
  return (
    <div onClick={e => removeSelection(e)} style={motive} className="box">
      {children}
    </div>
  );
};

Box.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  motive: object.isRequired,
  setSelectedElement: func.isRequired,
};

export default Box;
