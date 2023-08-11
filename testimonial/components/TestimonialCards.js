import React from "react";
import "./TestimonialCards.css";

const TestimonialCards = ({ image, rating, name, description }) => {
  return (
    <div className="card">
      <img width="300px" src={image} alt="greek salad" />
      <div className="testimoni-info">
        <div className="title">
          <h3>{title}</h3>
          <p className="name">${name}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TestimonialCards;
