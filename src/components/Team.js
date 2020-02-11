import React from 'react';
import {node, string} from 'prop-types';

function Team({children, title, subtitle, description}) {
  return (
    <div id="team">
      <div className="background-image"></div>
      <div className="team-grid">
        <div className="our-team">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className="description">{description}</div>
        </div>
        {children}
      </div>
    </div>
  );
}

Team.propTypes = {
  children: node.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
  description: string.isRequired,
};

export default Team;
