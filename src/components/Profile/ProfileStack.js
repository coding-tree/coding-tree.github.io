import React from 'react';
import {array} from 'prop-types';

const ProfileStack = ({stack}) => {
  if (stack) {
    const [lastItem] = stack.slice(-1);
    return (
      <div className="profile-stack">
        <p>
          Technologie:{' '}
          {stack &&
            stack.map((el) => (
              <span key={el.id}>
                {el.title}
                {el !== lastItem && ', '}
              </span>
            ))}
        </p>
      </div>
    );
  }
  return null;
};

ProfileStack.propTypes = {
  stack: array,
};

export default ProfileStack;
