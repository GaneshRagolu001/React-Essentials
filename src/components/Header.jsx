import React from "react";
import "./Header.css";
import headerimg from "../assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function generateRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}


const Header = () => {
  const description = reactDescriptions[generateRandom(2)];
  return (
    <header>
      <img src={headerimg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
       {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
