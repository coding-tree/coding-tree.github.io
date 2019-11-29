import React, {lazy, forwardRef, useEffect} from 'react';

import Background from './Background';
// const Background = lazy(() => import('./Background'));

const BackgroundContainer = forwardRef((props, ref) => {
  console.log(ref);
  return (
    <div className="background">
      <Background ref={ref}></Background>
    </div>
  );
});

export default BackgroundContainer;
