import Image from 'next/image'
import React from 'react'
import './Buttons.css'

function SocialButton(name, url, altImage) {
    return (
        <a className='footer-social-button' href={url}>
            <li>
                <Image
                    className='footer-social-button-logo'
                    src={name}
                    width={70} 
                    height={70} 
                    alt={altImage} /> 
           </li>
        </a>
    )
}

export default SocialButton
