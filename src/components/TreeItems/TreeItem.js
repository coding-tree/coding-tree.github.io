import React, { useState, lazy } from "react";
import { useSpring, animated } from "react-spring";
import { easeCubicInOut } from "d3-ease";
import { string, node, bool, object, array } from "prop-types";

const TreeItemModal = lazy(() => import("./TreeItemModal"));
const Bird = lazy(() => import("../Birds"));

function TreeItem({
  title,
  children,
  top,
  left = "initial",
  right = "initial",
  isLeft,
  bird,
  rwd
}) {
  const [isVisible, setVisibility] = useState(false);

  isLeft = right === "initial";

  const {
    is2K,
    isLargeDesktop,
    isDesktop,
    isTablet,
    isMobile,
    isSmallMobile
  } = rwd;

  const calculateRwd = array => {
    if (is2K) return array[0];
    if (isLargeDesktop) return array[1];
    if (isDesktop) return array[2];
    if (isTablet) return array[3];
    if (isMobile) return array[4];
    if (isSmallMobile) return array[5];
  };

  const descAnimation = useSpring({
    config: { duration: 300, easing: easeCubicInOut },
    delay: isVisible && 200,
    transform: !isLeft ? "rotate(180deg)" : "initial",
    bottom: !isLeft ? "-30px" : "initial",
    top: isLeft ? "-30px" : "initial",
    opacity: isVisible ? 1 : 0,
    willChange: "opacity"
  });
  const containerAnimation = useSpring({
    config: { duration: 300, easing: easeCubicInOut },
    zIndex: isVisible ? 100 : -5,
    left: isLeft ? "80%" : "initial",
    right: !isLeft ? "80%" : "initial",
    transform: !isLeft ? "rotateZ(-180deg)" : "initial",
    willChange: "auto"
  });

  return (
    <div
      className="bird-container"
      style={{
        top: calculateRwd(top),
        left: calculateRwd(left),
        right: calculateRwd(right)
      }}
    >
      <Bird rwd={rwd} bird={bird} setVisibility={setVisibility}></Bird>

      {/* ifDesktop */}
      {is2K || isLargeDesktop || isDesktop ? (
        <animated.div style={containerAnimation} className="hover-container">
          <animated.div style={descAnimation} className="hover-description">
            <h3>{title}</h3>
            <p>{children}</p>
          </animated.div>
        </animated.div>
      ) : (
        <TreeItemModal
          title={title}
          visibility={isVisible}
          setVisibility={setVisibility}
        >
          {children}
        </TreeItemModal>
      )}
    </div>
  );
}

TreeItem.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
  top: array,
  left: array,
  right: array,
  isLeft: bool,
  bird: string.isRequired,
  rwd: object.isRequired
};

export default TreeItem;
