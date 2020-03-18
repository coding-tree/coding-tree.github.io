import React from 'react';
import {array} from 'prop-types';

const ProfileStack = ({stack}) => {
  if (stack) {
    return (
      <div className="profile-stack">
        <p>
          Technologie:{' '}
          {stack.length > 1 ? stack.map(el => <span key={el.id}>{el.title}, </span>) : <span>{stack}</span>}
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
