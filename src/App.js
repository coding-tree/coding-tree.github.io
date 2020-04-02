import React, {lazy, Suspense, useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import './styles/main.scss';

import Formik from './components/Formik';
import SocialLinks from './components/SocialLinks';
import DayNight from './components/DayNight';
import {withTimeOfDay} from './components/hoc/withTimeOfDay';

import Navigation from './components/Navigation';
import NavigationMobile from './components/NavigationMobile';
import {useMedia} from './components/hooks/useMedia';
import Footer from './components/Footer';
import {withTheme} from './components/hoc/withTheme';
import MainWrapper from './components/MainWrapper';
import WrapperContainer from './components/WrapperContainer';

const Home = lazy(() => import('./components/Home'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const NotFound = lazy(() => import('./components/NotFound'));

function App({dateTime, setDateTime, motive}) {
  const largeDevice = useMedia('(min-width: 896px)');

  const calculateViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', calculateViewportHeight);
    return () => {
      window.removeEventListener('resize', calculateViewportHeight);
    };
  }, []);

  return (
    <>
      <Suspense
        fallback={
          <div>
            <h1 style={{color: '#fff'}}>Loading...</h1>
          </div>
        }>
        <MainWrapper motive={motive}>
          <WrapperContainer motive={motive}>
            {largeDevice ? <Navigation></Navigation> : <NavigationMobile></NavigationMobile>}
            <SocialLinks></SocialLinks>
            <DayNight setDateTime={setDateTime} dateTime={dateTime}></DayNight>
            <Switch>
              <Route exact strict path="/" component={Home}></Route>
              <Route exact strict path="/o-nas" component={AboutUs}></Route>
              {/* Disabled */}
              {/* <Route exact strict path="/galeria" component={GalleryPage}></Route> */}
              <Route exact strict path="/kontakt" component={Formik}></Route>
              <Route exact strict path="/404" component={NotFound}></Route>
              <Redirect to="/404"></Redirect>
            </Switch>
          </WrapperContainer>
          <Footer></Footer>
        </MainWrapper>
      </Suspense>
    </>
  );
}

export default withTimeOfDay(withTheme(App));
