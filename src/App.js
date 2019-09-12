import React from 'react';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';
import Error404 from './components/Error404/Error404';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='*' component={Error404}/>
      </Switch>
      <Home/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
