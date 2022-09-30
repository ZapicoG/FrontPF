import React from 'react';
import SearchBar from '../searchBar/searchBar';
import s from "./home.module.css"

const Home = () => {
    return ( 
    <>
        <div>
            <SearchBar/>
        </div>
        <div className={s.container}>
            <h2>Hola</h2>
        </div>
    </>
     );
}

export default Home
