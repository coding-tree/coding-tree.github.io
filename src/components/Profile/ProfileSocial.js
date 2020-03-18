import React from 'react';
import {string} from 'prop-types';

const ProfileSocial = ({social, icon}) => {
  if (social) {
    return (
      <a href={social} target="_blank" rel="noopener noreferrer">
        <i className={icon}></i>
      </a>
    );
  }
  return null;
};

ProfileSocial.propTypes = {
  social: string,
  icon: string.isRequired,
};

export default ProfileSocial;
