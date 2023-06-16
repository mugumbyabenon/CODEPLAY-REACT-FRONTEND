import React from 'react'

function Welcome() {
  return (
    <div style={{height: '70vh',
    
    margin: 0, padding: 0 ,
    width: "100vw",
    opacity: 80,
       backgroundImage: "url('https://img.freepik.com/free-photo/finance-money-debt-credit-balance-concept_53876-133849.jpg?size=626&ext=jpg')",
  backgroundSize: "cover",
  backgroundPosition: 'center center',
             backgroundRepeat: "no-repeat",
             imageRendering: 'auto',
             imageRendering: 'crisp-edges',
             imageRendering: 'pixelated',    
    }} > <div class="hero-content" >
    <h2>Welcome to OTIC Analytics</h2>
    <p>A leading consultancy specializing in financial predictive modeling empowered by machine learning and AI.</p>
    <a href="#contact" class="btn">Get Started</a>
    </div></div>
  )
}

export default Welcome