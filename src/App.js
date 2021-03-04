import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Header/Footer';
import Home from './components/Pages/Home';
import Men from './components/Pages/Men';
import Women from './components/Pages/Women';
import Location from './components/Pages/Location';
import SingleItem from './components/Products/SingleItem';
import Cart from './components/Pages/Cart';

const App = () =>{
  return (
    <BrowserRouter>
      <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path={["/men/:pid", "/women/:pid"]} component={SingleItem}/>
          <Route path="/men" component={Men}/>
          <Route path="/women" component={Women}/>
          <Route path="/location" component={Location}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/signup"/>
          <Route path="/login"/>
        </Switch>
        <Redirect to="/"/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
