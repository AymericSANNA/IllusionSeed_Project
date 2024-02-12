"use client";
import React, { useState } from "react";

function CardDescription(title,description) {
    const [info, setInfo] = useState(false);

    return (
       <div>
        <button
        className='show-info'
        onClick={()=>{setInfo(!info)}}
        ><p className="show-info-logo">🛈</p>
        </button>
        <div className={info ? "card-text-container" : "hidden-object"}>
            <h3 className='card-title'>{title}</h3>
            <p className='card-description'>{description}</p>
        </div>
       </div>
    )
}

export default CardDescription
