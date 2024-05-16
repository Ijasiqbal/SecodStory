import React from 'react'
import Navbar from '../components/Navbar'
import Corousel from '../components/Corousel'
import CommuntyIntro from '../components/CommuntyIntro'
import Footer from '../components/Footer'
import Categories from '../components/Categories'
import LoginIntro from '../components/LoginIntro'
import Service from '../components/Service'

export default function Landing() {
  return (
    <div>
        <Navbar />
        <Corousel />
        <Service />
        <CommuntyIntro />
        <Categories />
        <LoginIntro />
        <Footer />
        
        
     
    </div>
  )
}
