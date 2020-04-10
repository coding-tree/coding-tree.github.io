import React, {lazy} from 'react';
import {useMedia} from '../hooks/useMedia';

const Tree = lazy(() => import('./Tree'));

const TreeContainer = ({children, dateTime}) => {
  const isDesktop = useMedia('(min-width: 1150px)');
  const isTablet = useMedia('(max-width:1149px) and (min-width: 896px)');
  const isMobile = useMedia('(max-width:896px)');

  return (
    <div className="trees">
      {dateTime && (
        <>
          {isDesktop && (
            <Tree treeFile="tree-large" dateTime={dateTime}>
              {children}
            </Tree>
          )}

          {isTablet && (
            <Tree treeFile="tree-tablet" dateTime={dateTime}>
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
