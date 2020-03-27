import React from "react";
import { object } from "prop-types";

const Avatar = ({ profile }) => {
  const { name } = profile;
  return (
    <div className="avatar">
      <img src={`avatars/${name} - Landscape.svg`} alt="" />
    </div>
  );
};

Avatar.propTypes = {
  profile: object
};

export default Avatar;
