import React from 'react'
import Navbar from '../../components/ui/NavBar';
import PagesHero from '../../components/ui/pagesHero';
import OurworkSection from './ourworkSection';
import Footer from '../../components/ui/footer';
const Ourwork = () => {
  return (
    <div className=' font-Montserrat'>
    <Navbar />
    <PagesHero title="Our Works" />
    <OurworkSection />
    <Footer />

    </div>

  )
}

export default Ourwork;