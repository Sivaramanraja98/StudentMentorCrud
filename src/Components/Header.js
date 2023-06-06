import React from 'react'
import { Link } from 'react-router-dom';

function Header(props) {
  
 
  return (
    <div className='Header bg dark'>
        <h1>{props.heading}</h1>
         
        <div className='navbar bg-dark'>
        <Link to ='/'>
          <span>Home</span>
        </Link>  
         <Link to ='/stuuser'>
            <span className='nav-item'>VIEW STUDENT</span>
         </Link>
         <Link to ='/addstu'>
            <span className='nav-item'>ADD STUDENT</span>
         </Link>
         <Link to ='/menuser'>
            <span className='nav-item'>VIEW MENTOR</span>
         </Link>
         <Link to ='/addMen'>
            <span className='nav-item'>ADD MENTOR</span>
         </Link>

        </div>
    </div>
  )
}

export default Header;