import React, { lazy } from "react";
import { object } from "prop-types";

const Tree2K = lazy(() => import("./Tree2K"));
// const BackgroundLarge = lazy(() => import("./BackgroundLarge"));
// const BackgroundDesktop = lazy(() => import("./BackgroundDesktop"));
// const BackgroundMedium = lazy(() => import("./BackgroundMedium"));
// const BackgroundMobile = lazy(() => import("./BackgroundMobile"));
// const BackgroundSmallMobile = lazy(() => import("./BackgroundSmallMobile"));

const TreeContainer = ({ rwd, children, dateTime }) => {
  const {
    is2K,
    isLargeDesktop,
    isDesktop,
    isTablet,
    isMobile,
    isSmallMobile
  } = rwd;
  return (
    <div className="trees">
      {dateTime && (
        <>
          {is2K && <Tree2K dateTime={dateTime}>{children}</Tree2K>}
          {/* {isLargeDesktop && <BackgroundLarge></BackgroundLarge>}
      {isDesktop && <BackgroundDesktop></BackgroundDesktop>}
      {isTablet && <BackgroundMedium></BackgroundMedium>}
      {isMobile && <BackgroundMobile></BackgroundMobile>}
      {isSmallMobile && <BackgroundSmallMobile></BackgroundSmallMobile>} */}
        </>
      )}
    </div>
  );
};

TreeContainer.propTypes = {
  rwd: object.isRequired
};

export default TreeContainer;
