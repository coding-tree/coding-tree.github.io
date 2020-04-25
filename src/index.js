import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import {unregister} from './serviceWorker';

import '@fortawesome/fontawesome-free/css/all.min.css';

import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from './components/contexts/ThemeContext';
import 'react-toastify/dist/ReactToastify.min.css';

window.buildDetails = {
  commit: process.env.REACT_APP_GIT_COMMIT,
  branch: process.env.REACT_APP_GIT_BRANCH,
  tag: process.env.REACT_APP_GIT_TAG,
  url: process.env.REACT_APP_HOMEPAGE_URL,
  buildTime: process.env.REACT_APP_BUILD_TIME,
};

const showInProgress = process.env.REACT_APP_SHOW_IN_PROGRESS;
if (showInProgress !== 'true') {
  const App = lazy(() => import('./components/BuildPage/BuildApp'));
  ReactDOM.render(
    <Suspense
      fallback={
        <div>
          <h1 style={{color: '#fff'}}>Loading...</h1>
        </div>
      }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>,
    document.getElementById('root')
  );
} else {
  const App = lazy(() => import('./App'));
  ReactDOM.render(
    <Suspense
      fallback={
        <div>
          <h1 style={{color: '#fff'}}>Loading...</h1>
        </div>
      }>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Suspense>,
    document.getElementById('root')
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
