import React from 'react';
import {oneOfType, node, arrayOf, object} from 'prop-types';
import {useMedia} from '../hooks/useMedia';

const ProfileDetail = ({children, selectedElement, setSelectedElement}) => {
  const isTablet = useMedia('(max-width: 896px)');

  const closeModal = (e) => {
    e.target === e.currentTarget && setSelectedElement(null);
  };

  if (selectedElement.kind === 'person') {
    if (isTablet) {
      return (
        <div onClick={(e) => closeModal(e)} className="profile-box">
          <div className="profile-modal">
            <button className="close" onClick={() => setSelectedElement(null)}>
              <i className="fas fa-times"></i>
            </button>
            {children}
          </div>
        </div>
      );
    }
    return <div className="profile-box">{children}</div>;
  }
  return null;
};

ProfileDetail.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  selectedElement: object,
};

export default ProfileDetail;
