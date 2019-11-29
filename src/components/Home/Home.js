import React, {createRef, useEffect, useState, lazy} from 'react';
import ReactResizeDetector from 'react-resize-detector';

import Lottie from 'react-lottie';

import * as tree from './tree.json';
import * as treeLarge from './tree-large.json';
import * as treeMedium from './tree-medium.json';
import * as treeMobile from './tree-mobile.json';
import * as treeSmallMobile from './tree-smallMobile.json';

// Components
import Faq from '../Faq';
import Footer from '../Footer';
import Gallery from '../Gallery.js';
// import BackgroundContainer from '../Background/BackgroundContainer.js';
// import Background from '../Background/Background.js';
// import Background from '../Background.js';
// import TreeButtonModalContainer from '../TreeButtonModalContainer.js';

// import Navigation from '../Navigation.js';
// import NavigationMobile from '../NavigationMobile.js';
// import TreeButtonContainer from '../TreeButtonContainer.js';

const TreeButtonModalContainer = lazy(() => import('../TreeButtonModalContainer'));
const TreeButtonContainer = lazy(() => import('../TreeButtonContainer'));
const Navigation = lazy(() => import('../Navigation'));
const NavigationMobile = lazy(() => import('../NavigationMobile'));
const BackgroundContainer = lazy(() => import('../Background/BackgroundContainer'));

function Home() {
  const [height, setHeight] = useState(null);
  const [documentWidth, setWidth] = useState(null);

  const backgroundImg = createRef();

  const resize = () => {
    if (backgroundImg.current) setHeight(backgroundImg.current.el.offsetHeight);
  };

  const options = {
    // backgroundMobileOptions: {
    //   loop: true,
    //   autoplay: true,
    //   animationData: backgroundMobile.default,
    // },
    // backgroundSmallMobileOptions: {
    //   loop: true,
    //   autoplay: true,
    //   animationData: backgroundSmallMobile.default,
    // },
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
    // const temp = backgroundImg.current;
    if (backgroundImg.current) {
      setHeight(backgroundImg.current.el.offsetHeight);
    }
    setWidth(document.body.clientWidth);
    console.log(height);
  });
  const rwd = {
    isLargeDesktop: documentWidth >= 1200,
    isDesktop: documentWidth < 1200 && documentWidth >= 896,
    isTablet: documentWidth < 896 && documentWidth >= 568,
    isMobile: documentWidth < 568 && documentWidth >= 433,
    isSmallMobile: documentWidth < 433,
  };

  const checkDeviceWidth = type => {
    if (documentWidth > 1200) return options[`${type}Options`];
    if (documentWidth > 896) return options[`${type}LargeOptions`];
    if (documentWidth > 568) return options[`${type}MediumOptions`];
    if (documentWidth > 433) return options[`${type}MobileOptions`];
    return options[`${type}SmallMobileOptions`];
  };

  return (
    <main>
      <div style={{height}} className="container">
        <header>
          <div style={{height}} className="logo-container">
            {documentWidth > 896 ? <Navigation></Navigation> : <NavigationMobile></NavigationMobile>}

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
              <TreeButtonContainer documentWidth={documentWidth}></TreeButtonContainer>
            ) : (
              <TreeButtonModalContainer documentWidth={documentWidth}></TreeButtonModalContainer>
            )}
          </div>
        </header>
        {/* BACKGROUND */}
        <BackgroundContainer ref={backgroundImg} rwd={rwd}></BackgroundContainer>
        <Lottie
          style={{position: 'absolute', top: '0px', height: 'initial', zIndex: '-1'}}
          isClickToPauseDisabled={true}
          speed={1}
          options={checkDeviceWidth('tree')}></Lottie>
      </div>

      <Gallery documentWidth={documentWidth}></Gallery>
      <Faq></Faq>

      <Footer></Footer>
      <ReactResizeDetector handleWidth handleHeight onResize={resize} />
    </main>
  );
}

export default Home;
