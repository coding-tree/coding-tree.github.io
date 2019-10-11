import React, {useRef, useEffect, useState, useCallback} from 'react';
import treeLeft from './tree_left.svg';
import treeRight from './tree_right.svg';
import background from './background.svg';
import ReactResizeDetector from 'react-resize-detector';
import {useSpring, useSprings, animated} from 'react-spring';

function Home() {
  const [isLoading, setLoading] = useState(true);
  const [height, setHeight] = useState(null);

  const image = useRef(null);

  const awaitImage = () => {
    setLoading(false);
  };

  const resize = () => {
    setHeight(image.current.offsetHeight);
  };

  useEffect(() => {
    if (!isLoading) {
      setHeight(image.current.offsetHeight);
    }
  });

  return (
    <main>
      <div style={{height}} className="container">
        <header>
          <div style={{height}} className="logo-container">
            <h1>Coding Tree</h1>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt explicabo est quas adipisci iste
              provident voluptas facere nostrum culpa a! Numquam, ex officiis. Eveniet dolor, amet dolorem error quia
              doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel non quos rerum nobis id culpa
              iste , minima quas ab, hic facilis quod accusantium, voluptatum temporibus incidunt placeat tempora
              laboriosam! Veniam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo magnam quis impedit
              ipsum dignissimos alias et in officia soluta delectus voluptate quidem laboriosam facere dolorum ut, quam
              voluptates fuga eligendi.
            </div>
            <TreeButton top="32%" left="30%"></TreeButton>
            <TreeButton top="45.5%" right="31.5%" isLeft={false}></TreeButton>
            <TreeButton top="59%" left="33%"></TreeButton>
            <TreeButton top="71.5%" right="28%" isLeft={false}></TreeButton>
          </div>
        </header>
        <div className="background">
          <img
            ref={image}
            onLoad={awaitImage}
            className="background-image"
            src={background + '#svgView(preserveAspectRatio(none))'}
            alt=""
          />
        </div>
        <TreeLeft height={height}></TreeLeft>

        <div style={{height}} className="tree-right">
          <img className="tree-right-image" src={treeRight} alt="" />
        </div>
      </div>

      <ReactResizeDetector handleWidth handleHeight onResize={resize} />
    </main>
  );
}

function TreeButton({top, left = 'initial', right = 'initial', isLeft = true}) {
  const [isVisible, setVisibility] = useState(false);
  const descAnimation = useSpring({
    width: isVisible ? '420px' : '0px',
    paddingLeft: isVisible ? '20px' : '0px',
    overflow: isLeft ? 'hidden' : '',
    delay: isVisible ? 250 : 0,

    // config: {duration: 300},
  });
  const buttonAnimation = useSpring({
    backgroundColor: !isVisible ? '#4b1220' : '#fff',
  });
  const arrowAnimation = useSpring({
    height: isVisible ? '36px' : '0px',
    opacity: isVisible ? 1 : 0,
    delay: isVisible ? 0 : 700,

    config: {duration: 300},
    // config: {delay: isVisible ? 2000 : 0},
  });
  const containerAnimation = useSpring({
    zIndex: isVisible ? 100 : 0,
    config: {duration: 300},
  });

  const buttonInfAnimation = useSpring({
    from: {
      scale: 1,
    },
    to: {
      scale: 1.5,
    },
  });
  return (
    <animated.div
      style={{...containerAnimation, top, left, right, transform: !isLeft && 'rotateZ(-180deg)'}}
      className="hover-container"
    >
      <React.Fragment>
        <animated.button
          style={{...buttonInfAnimation, ...buttonAnimation}}
          onMouseLeave={() => setVisibility(false)}
          onMouseEnter={() => setVisibility(true)}
          className="hover"
        ></animated.button>
        <animated.div
          style={{...arrowAnimation, transform: isLeft ? 'rotateZ(-135deg)' : 'rotateZ(-45deg)'}}
          className="arrow"
        ></animated.div>
      </React.Fragment>

      <animated.div
        style={{
          ...descAnimation,
          transform: !isLeft && 'rotate(180deg)',
          bottom: !isLeft && '-7px',
          top: !isLeft && 'initial',
        }}
        className="hover-description"
      >
        <h3>Lorem Ipsum Sit Dolores</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ducimus maxime eligendi aperiam
          exercitationem ex cumque distinctio numquam facilis ut, necessitatibus amet porro laborum quis similique saepe
          excepturi maiores dolorem.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro error facilis, voluptatum mollitia architecto
          qui culpa! Sint, accusantium, obcaecati deserunt rem excepturi soluta nemo atque voluptatibus fugit nisi ea
          ipsam.
        </p>
      </animated.div>
    </animated.div>
  );
}

function TreeLeft({height}) {
  return (
    <div style={{height}} className="tree-left">
      <img className="tree-left-image" src={treeLeft} alt="" />
    </div>
  );
}

export default Home;
