import React from "react";
import SpecialCards from "./SpecialCards";
import greekSalad from "../assets/Salad.jpg";
import bruschetta from "../assets/Bruchetta.svg";
import LemonDessert from "../assets/LemonDessert.jpg";
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

const testimonialsData = [
  {
    img: greekSalad,
    rating: '*****',
    name: 12.99,
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
  const testimonials = testimonialsData.map((item) => {
    return (
      <TestimonialCards
        key={item.name}
        image={item.img}
        rating={item.rating}
        name={item.name}
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
      <section className="testimonials">
        <div className="top">
          <h1><center>Testimonials</center></h1>
        </div>
        <div className="testimonial-cards">{testimonials}</div>
      </section>
      <br></br>
    </main>
  );
}

export default Main;
