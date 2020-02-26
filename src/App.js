import React, {lazy, Suspense, useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import './styles/main.scss';

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
    <React.Fragment>
      <Suspense
        fallback={
          <div>
            <h1 style={{color: '#fff'}}>Loading...</h1>
          </div>
        }>
        <Switch>
          <Route exact strict path="/" component={Home}></Route>
          <Route exact strict path="/o-nas" component={AboutUs}></Route>
          <Route exact strict path="/404" component={NotFound}></Route>
          <Redirect to="/404"></Redirect>
        </Switch>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
