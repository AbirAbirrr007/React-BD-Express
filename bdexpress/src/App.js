import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import GlobalProductContext from './context/productContext'
import CartContextProvider from './context/CartContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Switch,Route}from 'react-router-dom'
import Cart from './components/Cart';
import RouterERR from './components/RouterERR';

function App() {
  return (
    <div className="App">
    <GlobalProductContext>
    <CartContextProvider>
    <Router>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/cart" component={Cart}/>
        <Route  component={RouterERR}/>
      </Switch>
    </Router>
    
    </CartContextProvider>
    </GlobalProductContext>
    
    
      
    </div>
  );
}

export default App;
