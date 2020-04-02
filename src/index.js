import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {unregister} from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from './components/contexts/ThemeContext';
import {DayProvider} from './components/contexts/DayContext';

window.buildDetails = {
  commit: process.env.REACT_APP_GIT_COMMIT,
  branch: process.env.REACT_APP_GIT_BRANCH,
};

ReactDOM.render(
  <BrowserRouter>
    <DayProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </DayProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
