import React from 'react'
import Navbar from '../components/Navbar'
import Corousel from '../components/Corousel'
import CommuntyIntro from '../components/CommuntyIntro'
import Footer from '../components/Footer'
import Categories from '../components/Categories'
import LoginIntro from '../components/LoginIntro'
import Service from '../components/Service'
import Navbar1 from '../components/Navbar1'

export default function Landing() {
  return (
    <div>
        <Navbar1 />
        <Corousel />  
        <Service />
        <CommuntyIntro />
        <Categories />
        <LoginIntro />
        <Footer />
        
        
     
    </div>
  )
}
