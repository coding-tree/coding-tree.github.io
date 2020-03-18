import React from 'react';
import {object} from 'prop-types';

const FolderDetail = ({selectedElement}) => {
  const {name, children = []} = selectedElement;
  if (selectedElement.kind === 'folder') {
    return (
      <div className="folder-detail">
        <h2>{name}</h2>
        <p>Ilość plików w folderze: {children.length}</p>
      </div>
    );
  }
  return null;
};

FolderDetail.propTypes = {
  selectedElement: object.isRequired,
};

export default FolderDetail;
