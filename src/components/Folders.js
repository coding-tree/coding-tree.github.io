import React, {useState, useEffect} from 'react';
import SubFolder from './SubFolder';
import {func, object} from 'prop-types';

const Folders = ({setSelectedElement, selectedElement, folderStructure}) => {
  const [selectedItem, setSelection] = useState(null);
  const setFolderIcon = isVisible => {
    return isVisible ? '-' : '+';
  };
  useEffect(() => {
    selectedElement && selectedItem && selectedItem.lastElementChild.classList.add('folder-selected');
    !selectedElement && selectedItem && selectedItem.lastElementChild.classList.remove('folder-selected');
  }, [selectedItem, selectedElement]);
  if (folderStructure) {
    return (
      <div className="folders">
        {folderStructure.children.map(el => (
          <SubFolder
            key={el.id}
            folderStructure={folderStructure.children}
            selectedItem={selectedItem}
            setSelection={setSelection}
            setFolderIcon={setFolderIcon}
            setSelectedElement={setSelectedElement}
            el={el}></SubFolder>
        ))}
      </div>
    );
  }
  return null;
};

Folders.propTypes = {
  setSelectedElement: func.isRequired,
  selectedElement: object,
  folderStructure: object,
};

export default Folders;
