import React, {useRef, useEffect, useState} from 'react';
import ReactResizeDetector from 'react-resize-detector';
import {useSpring, animated} from 'react-spring';
import Lottie from 'react-lottie';
import * as background from './background.json';
import * as backgroundLarge from './background-large.json';
import * as backgroundMedium from './background-medium.json';
import * as backgroundMobile from './background-mobile.json';
import * as backgroundSmallMobile from './background-smallMobile.json';
import * as tree from './tree.json';
import * as treeLarge from './tree-large.json';
import * as treeMedium from './tree-medium.json';
import * as treeMobile from './tree-mobile.json';
import * as treeSmallMobile from './tree-smallMobile.json';

// Components
import Faq from '../Faq';
import Footer from '../Footer';
import Gallery from '../Gallery.js';

function Home() {
  const [height, setHeight] = useState(null);
  const [documentWidth, setWidth] = useState(null);
  const backgroundImg = useRef(null);

  const resize = () => {
    setHeight(backgroundImg.current.el.offsetHeight);
  };

  const options = {
    backgroundOptions: {
      loop: true,
      autoplay: true,
      animationData: background.default,
    },
    backgroundLargeOptions: {
      loop: true,
      autoplay: true,
      animationData: backgroundLarge.default,
    },
    backgroundMediumOptions: {
      loop: true,
      autoplay: true,
      animationData: backgroundMedium.default,
    },
    backgroundMobileOptions: {
      loop: true,
      autoplay: true,
      animationData: backgroundMobile.default,
    },
    backgroundSmallMobileOptions: {
      loop: true,
      autoplay: true,
      animationData: backgroundSmallMobile.default,
    },
    treeOptions: {
      loop: true,
      autoplay: true,
      animationData: tree.default,
    },
    treeLargeOptions: {
      loop: true,
      autoplay: true,
      animationData: treeLarge.default,
    },
    treeMediumOptions: {
      loop: true,
      autoplay: true,
      animationData: treeMedium.default,
    },
    treeMobileOptions: {
      loop: true,
      autoplay: true,
      animationData: treeMobile.default,
    },
    treeSmallMobileOptions: {
      loop: true,
      autoplay: true,
      animationData: treeSmallMobile.default,
    },
  };

  useEffect(() => {
    setWidth(document.body.clientWidth);
    setHeight(backgroundImg.current.el.offsetHeight);
  });

  const checkLarge = documentWidth > 1200;

  const checkDeviceWidth = type => {
    if (documentWidth > 1200) return options[`${type}Options`];
    if (documentWidth > 896) return options[`${type}LargeOptions`];
    if (documentWidth > 568) return options[`${type}MediumOptions`];
    if (documentWidth > 433) return options[`${type}MobileOptions`];
    return options[`${type}SmallMobileOptions`];
  };

  const setButtonsTopPosition = (topMedium, topMobile, topSmallMobile) => {
    if (documentWidth > 568) return topMedium;
    if (documentWidth > 433) return topMobile;
    return topSmallMobile;
  };

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

            {documentWidth > 896 ? (
              <React.Fragment>
                <TreeButton top={checkLarge ? '32.5%' : '43%'} left="28%"></TreeButton>
                <TreeButton top={checkLarge ? '44.5%' : '52.5%'} right="32%" isLeft={false}></TreeButton>
                <TreeButton top={checkLarge ? '56.5%' : '63%'} left="31%"></TreeButton>
                <TreeButton top={checkLarge ? '66.7%' : '71.5%'} right="29%" isLeft={false}></TreeButton>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <TreeButtonModal title="Example Title 1" top={setButtonsTopPosition('43%', '44.5%', '49%')} left="33%">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, maiores, veritatis reprehenderit
                  nostrum vel voluptatibus dolore recusandae consequatur a quod obcaecati blanditiis aliquam voluptas
                  velit optio quidem molestiae numquam harum?
                </TreeButtonModal>
                <TreeButtonModal
                  title="Example Title 2"
                  top={setButtonsTopPosition('53%', '54.5%', '57.5%')}
                  right="39%">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti id molestiae repellendus at
                  rem vero dolorum. Necessitatibus incidunt est ea quasi neque! Repudiandae voluptate commodi earum,
                  magni corrupti omnis.
                </TreeButtonModal>
                <TreeButtonModal title="Example Title 3" top={setButtonsTopPosition('63%', '65%', '66%')} left="38.5%">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti id molestiae repellendus at
                  rem vero dolorum. Necessitatibus incidunt est ea quasi neque! Repudiandae voluptate commodi earum,
                  magni corrupti omnis.
                </TreeButtonModal>
                <TreeButtonModal
                  title="Example Title 4"
                  top={setButtonsTopPosition('72.5%', '74.5%', '75.5%')}
                  right="37%">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti id molestiae repellendus at
                  rem vero dolorum. Necessitatibus incidunt est ea quasi neque! Repudiandae voluptate commodi earum,
                  magni corrupti omnis.
                </TreeButtonModal>
              </React.Fragment>
            )}
          </div>
        </header>
        <div className="background">
          <Lottie
            ref={backgroundImg}
            isClickToPauseDisabled={true}
            speed={1}
            options={checkDeviceWidth('background')}></Lottie>
        </div>
        <Lottie
          style={{position: 'absolute', top: '0px', height: 'auto', zIndex: '-1'}}
          isClickToPauseDisabled={true}
          speed={1}
          options={checkDeviceWidth('tree')}></Lottie>
      </div>

      <Gallery></Gallery>
      <Faq></Faq>

      <Footer></Footer>
      <ReactResizeDetector handleWidth handleHeight onResize={resize} />
    </main>
  );
}

function TreeButtonModal({top, children, title, left = 'initial', right = 'initial'}) {
  const [visibility, setVisibility] = useState(false);

  const toggleModal = () => {
    setVisibility(!visibility);
  };

  const closeModal = e => {
    e.target.className === 'modal' && setVisibility(false);
  };
  return (
    <div>
      <button style={{top, left, right}} className="button-modal" onClick={toggleModal}></button>
      {visibility && (
        <div onClick={e => closeModal(e)} className="modal">
          <div className="modal-box">
            <div className="modal-container">
              <h2>{title}</h2>
              <button onClick={() => setVisibility(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <p>{children}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function TreeButton({top, left = 'initial', right = 'initial', isLeft = true}) {
  const [isVisible, setVisibility] = useState(false);

  const descAnimation = useSpring({
    width: isVisible ? '420px' : '0px',
    paddingLeft: isVisible ? '20px' : '0px',
    overflow: isLeft ? 'hidden' : '',
    delay: isVisible ? 250 : 0,
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
        <button
          onMouseLeave={() => setVisibility(false)}
          onMouseEnter={() => setVisibility(true)}
          className="hover"></button>
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
