import './Home.css'
import React from 'react'
import Navbar from './homepage/navbar/nav'
const Home = () => {
  return (
    <div id='Home'>
        <Navbar/>
        <div className='blur-area'>
          
        </div>
        <h1>Welcome to Xotel</h1>
        <h3>Discover city's #1 Luxury Rooms.</h3>
        <button className="btn">
          <a href={'/'}>Explore Now &#8594; </a> 
        </button>
    </div>
  )
}

export default Home
