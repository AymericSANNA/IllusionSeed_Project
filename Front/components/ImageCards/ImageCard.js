
import Image from 'next/image'
import React from "react";
import './imageCard.css'
import CardDescription from '../CardDescription/CardDescription'

function imageCard(name, altImage, title, description) {

    return (
        <div className='card-container'>
            <Image 
                className='card-image'
                src={name}
                width={300} 
                height={400} 
                alt={altImage}
            />
            {CardDescription(title, description)}
            
        </div>
    )
}

export default imageCard
