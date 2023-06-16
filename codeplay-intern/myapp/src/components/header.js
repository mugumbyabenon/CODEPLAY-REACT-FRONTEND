import React from 'react'
import  { useState } from "react";

function Header() {
    const [scrollTo, setScrollTo] = useState("");

    const handleClick = () => {
      setScrollTo("my-component");
    };

  return (
    <div style={{
      
}}>
        <header class="header">
    <nav class="navbar">
      <div class="logo">
        
        <h1>OTIC Analytics</h1>
      </div>
      <ul class="nav-links">
        <a href="#home">Home</a>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
    </nav>
  </header>
    </div>
  )
}

export default Header