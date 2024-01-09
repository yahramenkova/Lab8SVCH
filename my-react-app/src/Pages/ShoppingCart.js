import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import Basket from '../Components/basket/basket';


function ShoppingCart() {

  return (
    <div className="shopping-cart">
      <Header />
      <Basket />
      <Footer/>
    </div>
  );
}

export default ShoppingCart;
