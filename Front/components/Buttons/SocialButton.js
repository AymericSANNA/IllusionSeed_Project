import Image from 'next/image'
import React from 'react'

function SocialButton(name,url) {
    return (
        <li>
            <a href={url}>
                <Image 
                    src={name}
                    width={70} 
                    height={70} 
                    alt="Social Network Logo" />
            </a>
        </li>
    )
}

export default SocialButton
