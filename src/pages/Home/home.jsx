import React from 'react'
import Navbar from '../../components/ui/NavBar';
import HeroSection from './heroSection';
import WhatWeDo from './whatWeDo';
import GetInvolved from './getInvolved';
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <GetInvolved />
      <WhatWeDo />
      
    
    </div>
  )
}

export default Home;