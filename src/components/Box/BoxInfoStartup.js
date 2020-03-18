import React from 'react';
import {string, oneOfType, arrayOf, node} from 'prop-types';

const BoxInfoStartup = ({title, children}) => {
  return (
    <div className="box-info-startup">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

BoxInfoStartup.propTypes = {
  title: string.isRequired,
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default BoxInfoStartup;
