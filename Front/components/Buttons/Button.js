import React from 'react'
import Image from 'next/image'

function Button(name, altImage) {
    return (
        <Image 
            src={name}
            width={70} 
            height={70} 
            alt={altImage} />
    )
}

export default Button
