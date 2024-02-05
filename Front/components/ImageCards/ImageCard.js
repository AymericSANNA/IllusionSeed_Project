import Image from 'next/image'
import React from 'react'
import './imageCard.css'

function imageCard(name, altImage, title, description) {
    return (
        <div className='card-container'>
            <Image 
                    className='card-image'
                    src={name}
                    width={300} 
                    height={400} 
                    alt={altImage}/>
            <div className='card-text-container'>
                <h3 className='card-title'>{title}</h3>
                <p className='card-description'>{description}</p>
            </div>
        </div>
    )
}

export default imageCard
