import React, { lazy } from "react";
import { object } from "prop-types";

const Tree = lazy(() => import("./Tree"));

const TreeContainer = ({ rwd, children, dateTime }) => {
  const { isLargeDesktop, isDesktop, isTablet, isMobile, isSmallMobile } = rwd;
  return (
    <div className="trees">
      {dateTime && (
        <>
          {isLargeDesktop && (
            <Tree treeFile="tree-large" dateTime={dateTime}>
              {children}
            </Tree>
          )}
          {isDesktop && (
            <Tree treeFile="tree-desktop" dateTime={dateTime}>
              {children}
            </Tree>
          )}
          {isTablet && (
            <Tree treeFile="tree-tablet" dateTime={dateTime}>
              {children}
            </Tree>
          )}
          {/* isMobile && <BackgroundMobile></BackgroundMobile>}
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
