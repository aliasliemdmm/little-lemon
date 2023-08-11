import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import "./SpecialCards.css";

const SpecialCards = ({ image, title, price, description }) => {
  return (
    <div className="card">
      <img width="300px" src={image} alt="special-image" />
      <div className="dish-info">
        <div className="title">
          <h3>{title}</h3>
          <p className="price">${price}</p>
        </div>
        <p>{description}</p>
        <span
          role="button"
          aria-label="On Click"
          className="order-btn"
        >
          Order a delivery
          <MdDeliveryDining
            size={30}
            style={{
              color: "#333",
              marginLeft: "15px",
              marginBottom: "-10px",
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default SpecialCards;
