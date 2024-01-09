import React from 'react'
import Header from '../Components/header';
import Footer from '../Components/footer';
import Slider from '../Components/slider/slider';
import Promotions from '../Components/toast/toast';

export default function SpecialOffers() {
  return (
    <div>
      <Header />
      <Slider/>
      <Promotions/>
      <Footer />
    </div>
  )
}
