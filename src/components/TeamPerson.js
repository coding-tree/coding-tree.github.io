import React from 'react';
import {string} from 'prop-types';

function TeamPerson({name, src}) {
  return (
    <div className="team-person">
      <div className="team-person-background"></div>
      <div className="team-person-image">
        <img src={src} alt="" />
      </div>
      <div className="team-person-content">
        <div className="team-person-content-name">{name}</div>
      </div>
    </div>
  );
}

TeamPerson.propTypes = {
  name: string.isRequired,
  src: string.isRequired,
};

export default TeamPerson;
