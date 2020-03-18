import React from 'react';

const ProfileDescription = ({emptyDescription, description = emptyDescription}) => {
  return <div className="profile-description">{description}</div>;
};

export default ProfileDescription;
