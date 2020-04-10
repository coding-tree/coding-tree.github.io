import React from 'react';
import ProfileSocial from './ProfileSocial';
import ProfileStack from './ProfileStack';
import {object, string} from 'prop-types';
import ProfileDescription from './ProfileDescription';
import ProfileName from './ProfileName';
import ProfileAge from './ProfileAge';

const Profile = ({profile, emptyDescription}) => {
  const {
    name,
    github,
    fb,
    stackOverflow,
    twitter,
    linkedIn,
    portfolio,
    dateOfBirth,
    stack,
    description,
    spotify,
  } = profile;

  return (
    <div className="profile">
      <ProfileName name={name}>
        <ProfileSocial social={github} icon="fab fa-github"></ProfileSocial>
        <ProfileSocial social={fb} icon="fab fa-facebook"></ProfileSocial>
        <ProfileSocial social={stackOverflow} icon="fab fa-stack-overflow"></ProfileSocial>
        <ProfileSocial social={twitter} icon="fab fa-twitter-square"></ProfileSocial>
        <ProfileSocial social={linkedIn} icon="fab fa-linkedin"></ProfileSocial>
        <ProfileSocial social={portfolio} icon="fas fa-globe"></ProfileSocial>
        <ProfileSocial social={spotify} icon="fab fa-spotify"></ProfileSocial>
      </ProfileName>
      <ProfileAge dateOfBirth={dateOfBirth}></ProfileAge>
      <ProfileStack stack={stack}></ProfileStack>
      <ProfileDescription description={description} emptyDescription={emptyDescription}></ProfileDescription>
    </div>
  );
};

Profile.propTypes = {
  profile: object,
  emptyDescription: string.isRequired,
};

export default Profile;
