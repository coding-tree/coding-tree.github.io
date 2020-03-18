import React from 'react';
import {object, string, oneOfType, arrayOf, node} from 'prop-types';

const BoxPath = ({title, selectedElement, folders, children}) => {
  return (
    <div className="box-path">
      <div>
        <h5>{title}</h5>
      </div>
      <div className="box-path-breadcrumb">
        <i className="fas fa-folder"></i>
        <h5>{(selectedElement && selectedElement.path) || (folders && folders.path)}</h5>
      </div>
      {children}
    </div>
  );
};

BoxPath.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  title: string.isRequired,
  selectedElement: object,
  folders: object,
};

export default BoxPath;
