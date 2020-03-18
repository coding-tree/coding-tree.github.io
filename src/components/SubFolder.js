import React, {useState} from 'react';
import {object, func, array} from 'prop-types';

const SubFolder = ({el, setFolderIcon, folderStructure, selectedItem, setSelection, setSelectedElement}) => {
  const [isExpanded, setExpand] = useState(false);
  const {id, name, kind, children, avatar} = el;

  const styles = {
    height: folderStructure.length === id && kind === 'person' && '30px',
    top: kind === 'person' && '-15px',
  };

  const handleFolderClick = e => {
    const elem = e.currentTarget;
    setSelectedElement(el);

    if (selectedItem && selectedItem !== elem) selectedItem.lastElementChild.classList.remove('folder-selected');
    setSelection(elem);
    setExpand(!isExpanded);
  };

  return (
    <div key={id} className="folder">
      {(folderStructure.length !== id || kind === 'person') && <hr className="border-top" style={styles} />}

      <div onClick={e => handleFolderClick(e)} className="folder-kind">
        {/* BORDER */}
        <hr className="border-left" />

        {kind === 'folder' && (
          <div onClick={() => setExpand(!isExpanded)} className="expand">
            {setFolderIcon(isExpanded)}
          </div>
        )}
        {kind === 'folder' ? <i className="fas fa-folder"></i> : <img src={`avatars/${avatar || name}.svg`} alt="" />}
        <p> {name} </p>
      </div>

      {children !== undefined &&
        children.length > 0 &&
        isExpanded &&
        children.map(el => (
          <SubFolder
            key={el.id}
            folderStructure={children}
            selectedItem={selectedItem}
            setSelection={setSelection}
            setFolderIcon={setFolderIcon}
            setSelectedElement={setSelectedElement}
            el={el}></SubFolder>
        ))}
    </div>
  );
};

SubFolder.propTypes = {
  el: object.isRequired,
  setFolderIcon: func.isRequired,
  folderStructure: array.isRequired,
  selectedItem: object,
  setSelection: func.isRequired,
  setSelectedElement: func.isRequired,
};
export default SubFolder;
