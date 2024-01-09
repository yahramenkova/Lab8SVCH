import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './Redux/index'; 

import Home from './Pages/Home';
import Catalog from './Pages/Catalog';
import ShoppingCart from './Pages/ShoppingCart';
import SpecialOffers from './Pages/SpecialOffers';
import AboutUs from './Pages/AboutUs';
import LogIn from './Pages/LogIn';
import LogUp from './Pages/LogUp';
import Reviews from './Pages/Reviews';
import NotFound from './Pages/Notfound';
import './App.css'

function App() {
  const userAuth = localStorage.getItem('auth');
  return (
    <Provider store={store}>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/specialOffers" element={<SpecialOffers />} />
        {userAuth === 'true' && (
        <Route path="/cart" element={<ShoppingCart />} />)}
        <Route path="/reg" element={<LogUp />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/logIn" element={<LogIn />} />
        {userAuth === 'true' && (
        <Route path="/reviews" element={<Reviews />} />)}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </Provider>
    
  );
}

export default App;
