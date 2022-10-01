import React, { useEffect } from 'react';
import SearchBar from '../searchBar/searchBar';
import s from "./home.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/action';
import Products from '../Products/Products'


const Home = () => {

    const product = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])

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
