import React from 'react';
import {node, string, func, bool} from 'prop-types';

function BirdContainerModal({children, title, setVisibility, visibility}) {
  const closeModal = (e) => {
    e.target.className === 'modal' && setVisibility(false);
  };

  return (
    <>
      {visibility && (
        <div onClick={(e) => closeModal(e)} className="modal">
          <div className="modal-box">
            <div className="modal-container">
              <h2>{title}</h2>
              <button onClick={() => setVisibility(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <p>{children}</p>
          </div>
        </div>
      )}
    </>
  );
}

BirdContainerModal.propTypes = {
  children: node.isRequired,
  title: string.isRequired,
  setVisibility: func.isRequired,
  visibility: bool.isRequired,
};

export default BirdContainerModal;
