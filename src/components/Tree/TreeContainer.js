import React, {lazy} from 'react';
import {useMedia} from '../hooks/useMedia';

const Tree = lazy(() => import('./Tree'));

const TreeContainer = ({children, dateTime}) => {
  const isLargeDesktop = useMedia('(min-width: 1515px)');
  const isDesktop = useMedia('(max-width:1514px) and (min-width: 1150px)');
  const isTablet = useMedia('(max-width:1149px) and (min-width: 768px)');
  const isSmallTablet = useMedia('(max-width:767px) and (min-width: 481px)');
  const isMobile = useMedia('(max-width: 480px)');

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
          {isSmallTablet && (
            <Tree treeFile="tree-small-tablet" dateTime={dateTime}>
              {children}
            </Tree>
          )}
          {isMobile && (
            <Tree treeFile="tree-mobile" dateTime={dateTime}>
              {children}
            </Tree>
          )}
        </>
      )}
    </div>
  );
};

TreeContainer.propTypes = {};

export default TreeContainer;
