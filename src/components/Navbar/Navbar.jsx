import React, { useState } from 'react'
import "./navbar.scss"

export const Navbar = () => {
  const [open, setOpen] = useState(false);
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
        <a href="/">SignIn</a>
        <a href="/" className="register">  SignUp </a>
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
