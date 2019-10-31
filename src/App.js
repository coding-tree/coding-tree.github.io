import React, {lazy, Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

// Styles
import './styles/main.scss';

// Components
const Home = lazy(() => import('./components/Home/Home'));
const NotFound = lazy(() => import('./components/NotFound'));

function App() {
  return (
    <React.Fragment>
      <Suspense
        fallback={
          <div>
            <h1>Loading...</h1>
          </div>
        }>
        <Switch>
          <Route exact strict path="/" component={Home}></Route>
          <Route exact strict path="/404" component={NotFound}></Route>
          <Redirect to="/404"></Redirect>
        </Switch>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
