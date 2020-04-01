import React from 'react';
import {withTheme} from './hoc/withTheme';

const SocialLinks = ({motive}) => {
  return (
    <aside style={motive}>
      <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/eZP8s2m">
        <i className="fab fa-discord"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/CodingTreeFoundation/">
        <i className="fab fa-facebook-square"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/orgs/codingtreefoundation">
        <i className="fab fa-github-square"></i>
      </a>
    </aside>
  );
};

export default withTheme(SocialLinks);
