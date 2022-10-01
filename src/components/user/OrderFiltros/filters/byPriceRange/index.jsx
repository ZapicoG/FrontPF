import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../../../../redux/action";


export default function ByPriceRange(){
    var dispatch = useDispatch()

    var [state,setState] = useState(false)
    var [rango, setRango] = useState({maxPrice: "",minPrice:""})

    function onChan(e){
        setRango({...rango,[e.target.name]: e.target.value})
    }

    function onSub(e){
        e.preventDefault()
        if(rango.maxPrice === "" && rango.minPrice === "") return alert("Pasar rango de precio")
        dispatch(updateFilter(rango))
        setRango({maxPrice: "",minPrice:""})
    }
    
    return (
        <>
        <button onClick={() => setState(state? false : true)}>{state? "<" : "Price"}</button>
        <form onSubmit={e => onSub(e)} style={{display: state? "flex" : "none" , position: "absolute", top:"290px"}}>
            <input type="number" placeholder="Min" name="minPrice" onChange={e => onChan(e)} value={rango.minPrice}/>
            <input type="number" placeholder="Max" name="maxPrice" onChange={e => onChan(e)} value={rango.maxPrice}/>
            <input type="submit" />
        </form>
            
        </>
    )
}