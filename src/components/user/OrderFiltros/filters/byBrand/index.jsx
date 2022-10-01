import React from "react";
import { useSelector } from "react-redux";


export default function ByBrand(){
    var brands = useSelector(state => state.brand)
    return (
        <>
            <select>
                <option hidden>Brand</option>
                {
                    brands.map((b,i) => <option key={i}>{b}</option>)
                }
            </select>
        </>
    )
}