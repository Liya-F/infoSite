import React from 'react'
import Navbar from '../../components/ui/NavBar';
import HeroSection from './heroSection';
import WhatWeDo from './whatWeDo';
import GetInvolved from './getInvolved';
import SocialsFeed from './socialsFeed';
import WhoWeAre from './whoWeAreSection';
import Partners from './partners';
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhoWeAre />
      <GetInvolved />
      <SocialsFeed />
      <WhatWeDo />
      <Partners />
      
      
      
      
    
    </div>
  )
}

export default Home;