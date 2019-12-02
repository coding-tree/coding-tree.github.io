import React from 'react';

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
export default Team;
