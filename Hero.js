import React from "react";
import "./hero.css"; 

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
      
        <h1 className="hero-title">
        <strong><h1 className="text-white">RE</h1></strong>
        <div>
          <span className="text-gray-300">use</span> <br />
          <span className="text-gray-300">duce</span> <br />
          <span className="text-gray-300">cycle</span>
        </div>
          
        
        </h1>
        <p className="hero-description">
          Welcome to Community-Driven Recycling, the platform that makes
          recycling easier by connecting citizens and collectors.
        </p>
        <button className="hero-button">Let's Go</button>
      </div>

      <div className="hero-image">
        <img
          src={require("./hm-removebg-preview.png")} 
          alt="Recycling Illustration"
        />
      </div>
    </section>
  );
}
