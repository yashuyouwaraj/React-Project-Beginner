import React, { useState } from "react";
import products from "./db/data";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import "./style.css";
import Category from "./Sidebar/Category/Category";
import Colors from "./Sidebar/Colors/Colors";
import Card from "./components/card";

const App = () => {
  const [selectCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //-------INPUT FILTER---------

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filterItems = products.filter((products) =>
    products.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  //-------Radio FILTER---------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //-------Buttons FILTER---------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //Filtering Input Items
    if (query) {
      filteredProducts = filterItems;
    }

    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, colors, company, newPrice, title }) =>
          category === selected ||
          colors === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ));
  }

  const result = filteredData(products,selectCategory,query)

  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Nav />
      <Recommended />
      <Products />
    </>
  );
};

export default App;
