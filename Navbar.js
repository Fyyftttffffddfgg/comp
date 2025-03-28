import React from "react";
import "./Navbar.css";

export default function Navbar() {  
  return (
    <nav className="Navbar">
      <div className="Navbar-logo">
        <img
          src={require("./jpo-removebg-preview.png")} 
          alt="Logo"
          className="logo"
        />
        <h1 className="Navbar-title">Community Recycling</h1>
      </div>
      <div className="Navbar-links">
        <a href="#HOME">Home</a>
        <a href="#LISTING">Listings</a>
        <a href="#ABOUT">About</a>
        <a href="#CONTACT">Contact</a>
      </div>
      <div className="Navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div>
        <img
                  src={require("./profil_vide.jpg")} 
                  alt="logo"
                  className="pro"
        />


      </div>
    </nav>
  );
}
