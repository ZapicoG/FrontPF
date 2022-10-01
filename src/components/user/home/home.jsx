import React from "react";
import Categories from "../Caterories/Categories";
import CarrouselHome from '../Recommended/CarrouselHome'
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
        <Categories/>
    <CarrouselHome/>
    <Products/>
    </div>
  );
};

export default Home;
