import React from 'react';
import {string} from 'prop-types';

const BoxImage = ({theme, light = 'box.svg', dark = 'box_dark.svg'}) => {
  const changeImageBox = () => (theme === 'lightTheme' ? light : dark);

  return <img src={'./' + changeImageBox()} alt="" />;
};

BoxImage.propTypes = {
  theme: string.isRequired,
  light: string.isRequired,
  dark: string.isRequired,
};

export default BoxImage;
