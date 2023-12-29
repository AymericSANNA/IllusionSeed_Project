import Image from 'next/image'
import React from 'react'

function SocialButton(name) {
    return (
        <li>
            <a href="">
                <Image 
                    src={name}
                    width={70} 
                    height={70} 
                    alt="Tiktok Logo" />
            </a>
        </li>
    )
}

export default SocialButton
