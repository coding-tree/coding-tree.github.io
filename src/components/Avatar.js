import React from 'react';
import {object} from 'prop-types';

const Avatar = ({profile}) => {
  const {name, avatar} = profile;
  return (
    <div className="avatar">
      <img src={`avatars/${avatar || name} - Landscape.svg`} alt="" />
    </div>
  );
};

Avatar.propTypes = {
  profile: object,
};

export default Avatar;
