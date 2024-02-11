"use client";
import React, { useState } from "react";

function Button() {
    const [info, setInfo] = useState(false);

    return (
       <div>
        <button
        className='show-info'
        onClick={()=>{setInfo(!info)}}
        >Info
        </button>
       </div>
    )
}

export default Button
