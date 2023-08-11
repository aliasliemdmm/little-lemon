import React from "react";
import SpecialCards from "./SpecialCards";
import greekSalad from "../assets/greek-salad.png";
import bruschetta from "../assets/bruchetta.jpg";
import LemonDessert from "../assets/lemon-dessert.png";
import "./Main.css";

const specialsData = [
  {
    img: greekSalad,
    title: "Greek Salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    img: bruschetta,
    title: "Bruschetta",
    price: 5.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    img: LemonDessert,
    title: "Lemon Dessert",
    price: 5.0,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Main() {
  const specialsCards = specialsData.map((item) => {
    return (
      <SpecialCards
        key={item.title}
        image={item.img}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    );
  });

  return (
    <main>
      <section className="specials">
        <div className="top">
          <h1>Specials</h1>
          <button>Online Menu</button>
        </div>
        <div className="special-cards">{specialsCards}</div>
      </section>
    </main>
  );
}

export default Main;
