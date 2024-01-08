import Image from 'next/image'
import React from 'react'

function SocialButton(name, url, altImage) {
    return (
        <li>
            <a href={url}>
                <Image 
                    src={name}
                    width={70} 
                    height={70} 
                    alt={altImage} /> 
            </a>
        </li>
    )
}

export default SocialButton
