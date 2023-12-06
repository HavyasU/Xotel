import React from 'react';
import './services.css';
import Navbar from './homepage/navbar/nav';
import building from '../images/building.jpg';
import bed from '../images/bed.jpg';
const Services = () => {
  return (
    <div className='services'>
      <Navbar />
      <div className="container">
        <div className="top-destinations">
          <h1>Our Top Destinations</h1>
          <div className="dest-container">
            <div className="dest-card">
              <img src="https://tse3.mm.bing.net/th?id=OIP.nolG_jwRXPmDOY5FxtYKqgHaE8&pid=Api&P=0&h=180" alt="" />
              <h3>Delhi</h3>
            </div>
            <div className="dest-card">
              <img src="https://tse1.mm.bing.net/th?id=OIP.zc6mRERjs29bCZuTs27t8QHaHa&pid=Api&P=0&h=150" alt="" />
              <h3>Bangalore</h3>
            </div>
            <div className="dest-card">
              <img src="https://tse2.mm.bing.net/th?id=OIP.l_vFRxjuYoE9h03LUU_GoQHaE8&pid=Api&P=0&h=150" alt="" />
              <h3>Mangalore</h3>
            </div>
            <div className="dest-card">
              <img src="https://tse3.mm.bing.net/th?id=OIP.oJiK-aEUgLSdmyI1MDmHQwHaFj&pid=Api&P=0&h=150" alt="" />
              <h3>Mysuru</h3>
            </div>
            <div className="dest-card">
              <img src="https://tse2.mm.bing.net/th?id=OIP.3Si4RJUTgvA_mw9jyffJmAHaE8&pid=Api&P=0&h=150" alt="" />
              <h3>Mumbai</h3>
            </div>
            <div className="dest-card">
              <img src="https://tse2.mm.bing.net/th?id=OIP.10GccPcFlNd-ZT2gKooduQHaE9&pid=Api&P=0&h=150" alt="" />
              <h3>New York</h3>
            </div>
            <div className="dest-card">
              <img src="https://tse3.mm.bing.net/th?id=OIP.JytdRk0DTNUJqydF54N1FgHaE8&pid=Api&P=0&h=150" alt="" />
              <h3>Australia</h3>
            </div>
          </div>
        </div>
        <div className="space">
        </div>
        <div className="rooms">
          <h1 className='rooms-heading'>We have the laxuary Rooms</h1>
          <div className="room-img">
            <img className='r-img-1' src={building} alt="image-1" />
            <img className='r-img-2' src={'http://www.laurataylornamey.com/wp-content/uploads/2017/03/IMG_4358.jpg'} alt="image-2" />
            <img className='r-img-3' src={'https://myhomemyzone.com/wp-content/uploads/2020/09/inc3.jpg'} alt="image-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
