import React, {useState} from 'react';

function TreeButtonModal({top, children, title, left = 'initial', right = 'initial'}) {
  const [visibility, setVisibility] = useState(false);

  const toggleModal = () => {
    setVisibility(!visibility);
  };

  const closeModal = e => {
    e.target.className === 'modal' && setVisibility(false);
  };
  return (
    <div>
      <button style={{top, left, right}} className="button-modal" onClick={toggleModal}></button>
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

export default TreeButtonModal;
