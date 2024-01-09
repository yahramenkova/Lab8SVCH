import React from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer';
import HomeBlock from '../Components/homeBlock';
import PopularProduct from '../Components/popularProducts';


function Home() {
  return (
    <div className="home">
      <Header />
      <main className="content">
        <HomeBlock />
        <PopularProduct />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
