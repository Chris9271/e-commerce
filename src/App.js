import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import Men from './components/Pages/Gender/Men';
import Women from './components/Pages/Gender/Women';
import Location from './components/Pages/Location & Map/Location';
import SingleItem from './components/Products/SingleItem';
import Cart from './components/Pages/Cart/Cart';
import SignIn from './components/Pages/SignIn & SignUp/SignIn';

const App = () =>{
  return (
    <BrowserRouter>
      <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          {/* Two path use same component */}
          <Route path={["/men/:pid", "/women/:pid"]} component={SingleItem}/>
          <Route path="/men" component={Men}/>
          <Route path="/women" component={Women}/>
          <Route path="/location" component={Location}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/signup" component={SignIn}/>
        </Switch>
        <Redirect to="/"/>
    </BrowserRouter>
  );
}

export default App;
