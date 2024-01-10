import Image from 'next/image'
import React from 'react'
import './Buttons.css'

function NavMobileButton(name,url) {
    return (

        <li className='menu-button'>
            <a href={url}>
                <Image 
                    className='menu-button-logo'
                    src={name}
                    width={70} 
                    height={70} 
                    alt="Menu Logo" />
            </a>
        </li>

    )
}

export default NavMobileButton
