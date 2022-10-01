import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsFiltered, getProductsName } from '../../../redux/action';
import Products from '../Products/Products';
import SearchBar from '../searchBar/searchBar';
import s from "./home.module.css";


const Home = () => {

    const products = useSelector(state => state.products);
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsName())
    },[])


    useEffect(() =>{
        // console.log(filter, "Home")
        dispatch(getProductsFiltered(filter))
    },[dispatch])
    // console.log(products, "Home")
    return ( 
    <>
        <div>
            <SearchBar/>
        </div>
        <div className={s.container}>
            <Products product={products}/>
        </div>
    </>
     );
}

export default Home
