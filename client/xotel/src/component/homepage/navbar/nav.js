import React, { useEffect, useState } from 'react';
import './nav.css';
import { Link, Route } from 'react-router-dom';
const Navbar = () => {
  const [signed, setSigned] = useState(false);
  useEffect(()=>{
    setSigned(localStorage.getItem('user') ? true : false);
})
  return (
    <>
      {signed
        ?
        <ul className='nav-ul'>
          <div id='li-logo'>
          </div>
          <li><Link className='nav-li' to={'/'} >Home</Link></li>
          <li><Link className='nav-li' to={'/Service'} >Service</Link></li>
          <li><Link className='nav-li' to={'/Booking'} >Booking</Link></li>
          <li>
            <Link className='nav-li' to={'/logout'}>
              Log Out
            </Link>
          </li>
        </ul>
        :
        <ul className='nav-ul'>
          <div id='li-logo'>
          </div>
          <li>
            <Link className='nav-li' to={'/login'}>Login
            </Link>
            <Link className='nav-li' to={'/SignUp'}>Register
            </Link>
          </li>
        </ul>
      }

    </>
  );
};

export default Navbar;
