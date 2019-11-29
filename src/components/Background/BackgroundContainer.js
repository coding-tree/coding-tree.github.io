import React, {lazy, forwardRef} from 'react';

const Background = lazy(() => import('./Background'));
const BackgroundLarge = lazy(() => import('./BackgroundLarge'));

const BackgroundContainer = forwardRef(({documentWidth}, ref) => {
  return (
    <div className="background">
      {documentWidth > 1200 && <Background ref={ref}></Background>}
      {documentWidth > 896 && <BackgroundLarge ref={ref}></BackgroundLarge>}
    </div>
  );
});

export default BackgroundContainer;
