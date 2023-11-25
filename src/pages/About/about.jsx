import React from 'react'
import Navbar from '../../components/ui/NavBar';
import PagesHero from '../../components/ui/pagesHero';
import BoardMembers from './boardSection';
import Footer from '../../components/ui/footer';

const Ourwork = () => {
  return (
    <div className=' font-Montserrat'>
    <Navbar />
    <PagesHero title="About Us" />
    <BoardMembers />
    <Footer />
    </div>

  )
}

export default Ourwork;