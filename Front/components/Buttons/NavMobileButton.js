import Image from 'next/image'
import React from 'react'
import './Buttons.css'

function NavMobileButton(name,url) {
    return (
        <a href={url}>
            <li className='menu-button'>
                <Image 
                    className='menu-button-logo'
                    src={name}
                    width={70} 
                    height={70} 
                    alt="Menu Logo" />
            </li>
        </a>

    )
}

export default NavMobileButton
