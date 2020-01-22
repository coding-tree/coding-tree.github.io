import React from 'react';

function TreeItemModal({children, title, setVisibility, visibility}) {
  const closeModal = e => {
    e.target.className === 'modal' && setVisibility(false);
  };

  return (
    <div>
      {visibility && (
        <div onClick={e => closeModal(e)} className="modal">
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
    </div>
  );
}

export default TreeItemModal;
