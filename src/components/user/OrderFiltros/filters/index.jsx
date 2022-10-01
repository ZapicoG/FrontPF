import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../../redux/action";
import ByBrand from "./byBrand";
import ByCategory from "./byCategory";
import ByPriceRange from "./byPriceRange";


export default function Filtros(){
    var [state,setState] = useState(false)
    var dispatch = useDispatch()
    var {categories,brand} = useSelector(state => state)
    useEffect(() => {
        if(!categories.length) dispatch(getCategories());
        if(!brand.length) console.log("a"); //dispatch(getBrand() ???)
    },[])
    return (
    <>  
        <button onClick={() => setState(state? false : true)}>{state? "<" : "FILTRAR"}</button>
        <div style={{display: state? "flex" : "none",flexDirection:"column"}}>
            <ByBrand/>
            <ByCategory/>
            <ByPriceRange/>
        </div>
    </>
    )
}