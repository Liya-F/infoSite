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
    <div className=' font-Montserrat'>
      <Navbar />
      <HeroSection />
      <WhoWeAre />
      <WhatWeDo />
      <GetInvolved />
      <SocialsFeed />
      <Partners />
      <NewsAndMediaSection />
      <Footer />
    </div>
  )
}

export default Home;