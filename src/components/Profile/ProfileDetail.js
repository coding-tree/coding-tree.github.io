import React from 'react';
import {oneOfType, node, arrayOf, object} from 'prop-types';

const ProfileDetail = ({children, selectedElement}) => {
  if (selectedElement.kind === 'person') {
    return <div>{children}</div>;
  }
  return null;
};

ProfileDetail.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  selectedElement: object,
};

export default ProfileDetail;
