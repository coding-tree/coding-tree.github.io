import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {unregister} from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from './components/contexts/ThemeContext';
import './styles/main.scss';

window.buildDetails = {
  commit: process.env.REACT_APP_GIT_COMMIT,
  branch: process.env.REACT_APP_GIT_BRANCH,
  tag: process.env.REACT_APP_GIT_TAG,
  url: process.env.REACT_APP_HOMEPAGE_URL,
  buildTime: process.env.REACT_APP_BUILD_TIME,
};

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
