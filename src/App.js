import React, {lazy, Suspense, useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import './styles/main.scss';

import {ThemeProvider} from './components/contexts/ThemeContext';
import Formik from './components/Formik';
import SocialLinks from './components/SocialLinks';

const Home = lazy(() => import('./components/Home'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const NotFound = lazy(() => import('./components/NotFound'));

function App() {
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
    <ThemeProvider>
      <Suspense
        fallback={
          <div>
            <h1 style={{color: '#fff'}}>Loading...</h1>
          </div>
        }>
        <SocialLinks></SocialLinks>
        <Switch>
          <Route exact strict path="/" component={Home}></Route>
          <Route exact strict path="/o-nas" component={AboutUs}></Route>
          {/* Disabled */}
          {/* <Route exact strict path="/galeria" component={GalleryPage}></Route> */}
          <Route exact strict path="/kontakt" component={Formik}></Route>
          <Route exact strict path="/404" component={NotFound}></Route>
          <Redirect to="/404"></Redirect>
        </Switch>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
