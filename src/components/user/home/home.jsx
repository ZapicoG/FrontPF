import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsFiltered, getProductsName } from '../../../redux/action';
import Products from '../Products/Products';
import SearchBar from '../searchBar/searchBar';
import s from "./home.module.css";


const Home = () => {

    const product = useSelector(state => state.products);
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsName())
    },[dispatch])


    useEffect(() =>{
        dispatch(getProductsFiltered(filter))
    },[filter])
    console.log(product)
    return ( 
    <>
        <div>
            <SearchBar/>
        </div>
        <div className={s.container}>
            <Products product={product}/>
        </div>
    </>
     );
}

export default Home
