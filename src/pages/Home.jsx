import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import { Outlet } from 'react-router-dom'
import About from './About'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
      
    
  )
}

export default Home
