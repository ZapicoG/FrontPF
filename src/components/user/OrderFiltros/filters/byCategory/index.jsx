import React from "react";
import { useSelector } from "react-redux";


export default function ByCategory(){
    
    var categories = useSelector(state => state.categories)
    return (
        <>
            <select>
                <option hidden>Category</option>
                {
                    categories.map((c,i) => <option key={i}>{c.name}</option>)
                }
            </select>
        </>
    )
}