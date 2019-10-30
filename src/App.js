import React from 'react';
import './styles/main.scss';
import Home from './components/Home/Home';
import Faq from './components/Faq';
import Footer from './components/Footer';
import {Switch, Route} from 'react-router-dom';
import Test from './components/Test/Test';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact strict path="/" component={Test}></Route>
        <Route exact strict path="/home" component={Home}></Route>
      </Switch>
      {/* <Home></Home> */}
      {/* <Faq></Faq> */}
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
