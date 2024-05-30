import React from 'react'
import Corousel from '../components/Landing/Corousel'
import CommuntyIntro from '../components/Landing/CommuntyIntro'
import Footer from '../components/Footer'
import Categories from '../components/Landing/Categories'
import LoginIntro from '../components/Landing/LoginIntro'
import Service from '../components/Landing/Service'
import Navbar from '../components/Navbar'


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
