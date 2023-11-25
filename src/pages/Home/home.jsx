import React from 'react'
import Navbar from '../../components/ui/NavBar';
import HeroSection from './heroSection';
import WhatWeDo from './whatWeDo';
import GetInvolved from './getInvolved';
import WhoWeAre from './whoWeAreSection'
import Partners from './partners'
import Footer from '../../components/ui/footer';
import NewsAndMediaSection from './newsAndMedia';
import SocialsFeed from './socialsFeed';

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
      <NewsAndMediaSection />
      <Footer />
      
      
      
    
    </div>
  )
}

export default Home;