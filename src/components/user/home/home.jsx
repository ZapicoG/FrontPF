
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsFiltered, getProductsName } from '../../../redux/action';
import Products from '../Products/Products';
import SearchBar from '../searchBar/searchBar';
import Categories from "../Caterories/Categories";
import CarrouselHome from '../Recommended/CarrouselHome'



const Home = () => {

    const products = useSelector(state => state.products);
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch();



    useEffect(() =>{
        // console.log(filter, "Home")
        dispatch(getProductsFiltered(filter))
    },[filter])
    // console.log(products, "Home")
    return ( 
    <>
        <div>
            <SearchBar/>
            
        <Categories/>
        <CarrouselHome/>
        <Products/>
        </div>
    </>
     );
}




export default Home
