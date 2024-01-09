import React from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer';
import ProductList from '../Components/productList';

function Catalog() {
  return (
    <div className="product-catalog">
      <Header />
      <ProductList /> 
      <Footer />
    </div>
  );
}

export default Catalog;
