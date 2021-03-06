import React, {lazy, useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import './styles/main.scss';

import Formik from './components/Formik';
import SocialLinks from './components/SocialLinks';
import DayNight from './components/DayNight';
import {withTimeOfDay} from './components/hoc/withTimeOfDay';
import Navigation from './components/Navigation';
import NavigationMobile from './components/NavigationMobile';
import {useMedia} from './components/hooks/useMedia';
import {withTheme} from './components/hoc/withTheme';
import MainWrapper from './components/MainWrapper';
import WrapperContainer from './components/WrapperContainer';
import Footer from './components/Footer';

import './styles/main.scss';

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

  useEffect(() => {
    document.body.style.setProperty('--main-color', motive ? motive['--main-color'] : '');
    document.body.style.setProperty('--folder-color', motive ? motive['--folder-color'] : '');
  }, [motive]);

  return (
    <>
      <DayNight setDateTime={setDateTime} dateTime={dateTime}></DayNight>
      <MainWrapper motive={motive}>
        <WrapperContainer>
          {largeDevice ? (
            <Navigation>
              <SocialLinks></SocialLinks>
            </Navigation>
          ) : (
            <NavigationMobile>
              <SocialLinks></SocialLinks>
            </NavigationMobile>
          )}

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
    </>
  );
}

export default withTimeOfDay(withTheme(App));
