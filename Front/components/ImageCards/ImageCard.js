import Image from 'next/image'
import React from 'react'

function imageCard(name, altImage, title, description) {
    return (
        <div>
            <Image 
                    src={name}
                    width={300} 
                    height={400} 
                    alt={altImage}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default imageCard
