import React from "react";
import { Link } from "react-router-dom";
import Food from "../assets/Food.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <header>
      <div className="left-side">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>
          <Link to="/booking">Reserve a table</Link>
        </button>
      </div>
      <div className="right-side">
        <img
          src={Food}
          alt="our cook holding a tablet with delicoues baguettes"
          className="header-image"
        />
      </div>
    </header>
  );
};

export default Hero;
