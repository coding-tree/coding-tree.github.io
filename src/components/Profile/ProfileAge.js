import React from 'react';
import {number} from 'prop-types';

const ProfileAge = ({dateOfBirth}) => {
  const date = new Date().getFullYear();
  const calculateAge = dateOfBirth => {
    return date - dateOfBirth;
  };
  if (dateOfBirth) {
    return <div className="profile-age">Wiek: {calculateAge(dateOfBirth)} lat</div>;
  }
  return null;
};

ProfileAge.propTypes = {
  dateOfBirth: number,
};

export default ProfileAge;
