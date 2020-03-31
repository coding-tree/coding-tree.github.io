import React, {lazy} from 'react';
import {object} from 'prop-types';
import {useMedia} from '../hooks/useMedia';

const Tree = lazy(() => import('./Tree'));

const TreeContainer = ({children, dateTime}) => {
  const isLargeDesktop = useMedia('(min-width: 1515px)');
  const isDesktop = useMedia('(max-width:1514px) and (min-width: 1150px)');
  const isTablet = useMedia('(max-width:1149px) and (min-width: 613px)');
  const isMobile = useMedia('(max-width:612px) and (min-width: 500px)');
  const isSmallMobile = useMedia('(max-width: 499px)');

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

TreeContainer.propTypes = {};

export default TreeContainer;
