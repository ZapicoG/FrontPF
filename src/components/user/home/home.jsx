import { Recommend } from "@mui/icons-material";
import React from "react";
import Categories from "../Caterories/Categories";
import Product from "../product/product";
import Products from "../Products/Products";
import Index from "../Recommended/CarrouselHome";
import Recommended from "../Recommended/Recommended";
import SearchBar from "../searchBar/searchBar";


const Home = () => {
  return (
    <div>
        <Categories/>
        {/* <Products/> */}
    {/* <Product/> */}
    {/* <Recommended/> */}
    <h2 className="text-2xl font-bold text-gray-900 px-20">Recomendados</h2>
    <Index/>
      
    </div>
  );
};

export default Home;
