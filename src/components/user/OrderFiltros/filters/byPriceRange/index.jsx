import React, { useState } from "react";


export default function ByPriceRange(){
    var [state,setState] = useState(false)

    return (
        <>
        <button onClick={() => setState(state? false : true)}>Price</button>
        <div style={{display: state? "flex" : "none" , position: "absolute", top:"250px"}}>
            <input type="number" placeholder="Min" />
            <input type="number" placeholder="Max" />
        </div>
            
        </>
    )
}