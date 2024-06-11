import React, { useContext, useEffect } from 'react'
import Corousel from '../components/Landing/Corousel'
import CommuntyIntro from '../components/Landing/CommuntyIntro'
import Footer from '../components/Footer'
import Categories from '../components/Landing/Categories'
import LoginIntro from '../components/Landing/LoginIntro'
import Service from '../components/Landing/Service'
import Navbar from '../components/Navbar'
import { UserContext } from '../context/UserContext'
import { useSelector } from 'react-redux'
import Showcase from '../components/Landing/ShowCase'
import Articles from '../components/Landing/Articles'


export default function Landing() {

  const user = useSelector((state)=> state.user.user)

  useEffect(()=>{
    console.log('user',user)
  },[user])
  return (
    <div>
        <Navbar />
        <Corousel />  
        <CommuntyIntro />
        <Service />
        <Categories />
        <LoginIntro />
        <Showcase />
        <Articles/>
        <Footer />
        
        
     
    </div>
  )
}
