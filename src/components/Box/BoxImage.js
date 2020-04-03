import React from 'react';
import {string} from 'prop-types';
import {useMedia} from '../hooks/useMedia';

const BoxImage = ({theme, light = 'box', dark = 'box_dark'}) => {
  const isDesktop = useMedia('(max-width: 1149px)');

  const changeImageBox = () => (theme === 'lightTheme' ? light : dark);

  if (isDesktop) return <img src={'./' + changeImageBox() + '_desktop.svg'} alt="" />;
  return <img src={'./' + changeImageBox() + '.svg'} alt="" />;
};

BoxImage.propTypes = {
  theme: string.isRequired,
  light: string.isRequired,
  dark: string.isRequired,
};

export default BoxImage;
