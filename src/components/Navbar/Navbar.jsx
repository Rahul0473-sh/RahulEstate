import React, { useState } from 'react'
import "./navbar.scss"
import {Link} from "react-router-dom"

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user=true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png"></img>
          <span>Estate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Detail</a>
      </div>
      <div className="right">
        
        {user ?
          <div className='user'>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='' />
            <span>Rahul Sharma</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          
       </div>:(<><a href="/">SignIn</a>
        <a href="/" className="register">  SignUp </a>
        </>)}
        <div className="menuIcon">
          <img src='/menu.png' onClick={()=>setOpen(!open)} alt='menu'/>
        </div>
        <div className={open ?"menu active" :"menu"}>
           <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Detail</a>
        <a href="/">Sign In</a>
        <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}
