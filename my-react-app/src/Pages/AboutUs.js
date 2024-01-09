import React from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'
import AboutUsPage from '../Components/aboutUsBlock/aboutUsPage'
import Overview from '../Components/overview/overview'

export default function AboutUs() {
  return (
    <div>
      <Header/>
      <Overview/>
      <AboutUsPage/>
      <Footer/>
    </div>
  )
}
