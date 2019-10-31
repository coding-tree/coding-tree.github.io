import React, {useRef, useEffect, useState} from 'react';
import ReactResizeDetector from 'react-resize-detector';
import {useSpring, animated} from 'react-spring';
import Lottie from 'react-lottie';
import * as background from './background.json';
import * as backgroundMedium from './background-1200.json';
import * as tree from './tree.json';
import * as treeMedium from './tree-1200.json';

// Components
import Faq from '../Faq';
import Footer from '../Footer';

function Home() {
  const [height, setHeight] = useState(null);
  const [documentWidth, setWidth] = useState(null);
  const backgroundImg = useRef(null);

  const resize = () => {
    setHeight(backgroundImg.current.el.offsetHeight);
  };

  const backgroundOptions = {
    loop: true,
    autoplay: true,
    animationData: background.default,
  };
  const backgroundMediumOptions = {
    loop: true,
    autoplay: true,
    animationData: backgroundMedium.default,
  };

  useEffect(() => {
    setWidth(document.body.clientWidth);
    setHeight(backgroundImg.current.el.offsetHeight);
  });

  const treeOptions = {
    loop: true,
    autoplay: true,
    animationData: tree.default,
  };
  const treeMediumOptions = {
    loop: true,
    autoplay: true,
    animationData: treeMedium.default,
  };

  const checkLarge = documentWidth > 1200;

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

            <TreeButton top={checkLarge ? '32.5%' : '43%'} left="28%"></TreeButton>
            <TreeButton top={checkLarge ? '44.5%' : '52.5%'} right="32%" isLeft={false}></TreeButton>
            <TreeButton top={checkLarge ? '56.5%' : '63%'} left="31%"></TreeButton>
            <TreeButton top={checkLarge ? '66.7%' : '71.5%'} right="29%" isLeft={false}></TreeButton>
          </div>
        </header>
        <div className="background">
          <Lottie
            ref={backgroundImg}
            isClickToPauseDisabled={true}
            speed={1}
            options={documentWidth > 1200 ? backgroundOptions : backgroundMediumOptions}></Lottie>
        </div>
        <Lottie
          style={{position: 'absolute', top: '0px', height: 'auto', zIndex: '-1'}}
          isClickToPauseDisabled={true}
          speed={1}
          options={documentWidth > 1200 ? treeOptions : treeMediumOptions}></Lottie>
      </div>

      <Faq></Faq>
      <Footer></Footer>
      <ReactResizeDetector handleWidth handleHeight onResize={resize} />
    </main>
  );
}

function TreeButton({top, left = 'initial', right = 'initial', isLeft = true}) {
  const [isVisible, setVisibility] = useState(false);
  const [key, setKey] = useState(0);

  const descAnimation = useSpring({
    width: isVisible ? '420px' : '0px',
    paddingLeft: isVisible ? '20px' : '0px',
    overflow: isLeft ? 'hidden' : '',
    delay: isVisible ? 250 : 0,
  });
  const buttonAnimation = useSpring({
    backgroundColor: !isVisible ? '#4b1220' : '#fff',
    transform: key % 2 === 0 ? 'scale(1.2)' : 'scale(1)',
    config: {duration: 1200},
    onRest: () => !isVisible && setKey(key + 1),
  });
  const arrowAnimation = useSpring({
    height: isVisible ? '36px' : '0px',
    opacity: isVisible ? 1 : 0,
    delay: isVisible ? 0 : 700,
    config: {duration: 300},
  });
  const containerAnimation = useSpring({
    zIndex: isVisible ? 100 : 0,
    config: {duration: 500},
  });

  return (
    <animated.div
      style={{top, left, right, transform: !isLeft && 'rotateZ(-180deg)', ...containerAnimation}}
      className="hover-container">
      <React.Fragment>
        <animated.button
          style={buttonAnimation}
          onMouseLeave={() => setVisibility(false)}
          onMouseEnter={() => setVisibility(true)}
          className="hover"></animated.button>
        <animated.div
          style={{...arrowAnimation, transform: isLeft ? 'rotateZ(-135deg)' : 'rotateZ(-45deg)'}}
          className="arrow"></animated.div>
      </React.Fragment>

      <animated.div
        style={{
          ...descAnimation,
          transform: !isLeft && 'rotate(180deg)',
          bottom: !isLeft && '-7px',
          top: !isLeft && 'initial',
        }}
        className="hover-description">
        {/* TITLE */}
        <h3>Lorem Ipsum Sit Dolores</h3>
        {/* DESCRIPTION */}
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

export default Home;
