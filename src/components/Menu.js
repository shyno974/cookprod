import React from "react";

const Menu = ({ m }) => {
  return (
    <div className="menu">
      <h2>{m.strMeal}</h2>
      <span>Origine : {m.strArea}</span>
      <div className="img-container">
        <img src={m.strMealThumb} alt="plat" />
      </div>
      <div className="info-container">
        <p>{m.strInstructions}</p>
      </div>
    </div>
  );
};

export default Menu;
