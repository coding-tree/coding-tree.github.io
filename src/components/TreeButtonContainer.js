import React from 'react';
import TreeButton from './TreeButton';

function TreeButtonContainer({documentWidth}) {
  const checkLarge = documentWidth > 1200;

  return (
    <React.Fragment>
      <TreeButton top={checkLarge ? '32.5%' : '43%'} left="28%"></TreeButton>
      <TreeButton top={checkLarge ? '44.5%' : '52.5%'} right="32%" isLeft={false}></TreeButton>
      <TreeButton top={checkLarge ? '56.5%' : '63%'} left="31%"></TreeButton>
      <TreeButton top={checkLarge ? '66.7%' : '72.3%'} right="29%" isLeft={false}></TreeButton>
    </React.Fragment>
  );
}

export default TreeButtonContainer;
