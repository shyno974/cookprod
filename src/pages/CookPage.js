import axios from "axios";
import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";

const CookPage = () => {
  let [menus, setMenus] = useState([]);
  let [searchInput, setSearchInput] = useState("");
  const fetchMenus = () => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchInput
      )
      .then((response) => setMenus(response.data.meals));
  };
  useEffect(fetchMenus, [searchInput]);
  return (
    <div className="app">
      <header>
        <h1>React Cook</h1>
        <input
          type="text"
          id="searchInput"
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Rechercher"
        />
      </header>
      <section className="card-container">
        {menus && menus.map((menu, index) => <Menu key={index} m={menu} />)}
      </section>
    </div>
  );
};

export default CookPage;
