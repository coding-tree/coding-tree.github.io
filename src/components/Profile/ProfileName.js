import React from 'react';
import {oneOfType, arrayOf, node, string} from 'prop-types';

const ProfileName = ({name, children}) => {
  return (
    <div className="profile-name">
      <h2>{name}</h2>
      <div className="profile-social">{children}</div>
    </div>
  );
};

ProfileName.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  name: string.isRequired,
};

export default ProfileName;
