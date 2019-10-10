import React, {useRef, useEffect, useState, useCallback} from 'react';
import treeLeft from './tree_left.svg';
import treeRight from './tree_right.svg';
import background from './background.svg';
import ReactResizeDetector from 'react-resize-detector';
import {useSpring, animated} from 'react-spring';
import {Spring} from 'react-spring/renderprops';

function Home() {
  const [isLoading, setLoading] = useState(true);
  const [height, setHeight] = useState(null);
  const [isVisible, setVisibility] = useState(false);
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

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
  });
  const buttonAnimation = useSpring({
    backgroundColor: isVisible ? '#000' : '#fff',
  });

  return (
    <React.Fragment>
      <div className="container">
        <header>
          <div style={{height}} className="logo-container">
            <h1>Coding Tree</h1>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt explicabo est quas adipisci iste
              provident voluptas facere nostrum culpa a! Numquam, ex officiis. Eveniet dolor, amet dolorem error quia
              doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel non quos rerum nobis id culpa
              iste, minima quas ab, hic facilis quod accusantium, voluptatum temporibus incidunt placeat tempora
              laboriosam! Veniam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo magnam quis impedit
              ipsum dignissimos alias et in officia soluta delectus voluptate quidem laboriosam facere dolorum ut, quam
              voluptates fuga eligendi.
            </div>
            <div className="hover-container one">
              <animated.button
                style={buttonAnimation}
                onMouseLeave={() => setVisibility(false)}
                onMouseEnter={() => setVisibility(true)}
                className="hover"
              ></animated.button>

              <animated.div style={props} className="hover-description">
                <h3>Lorem Ipsum Sit Dolores</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ducimus maxime eligendi aperiam
                  exercitationem ex cumque distinctio numquam facilis ut, necessitatibus amet porro laborum quis
                  similique saepe excepturi maiores dolorem.
                </p>
              </animated.div>
            </div>
            <div className="hover-container two">
              <button className="hover"></button>
            </div>
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
    </React.Fragment>
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
