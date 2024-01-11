import Image from 'next/image'
import React from 'react'
import './Buttons.css'

function NavMobileButton(name,url) {
    return (
        <a className='menu-button' href={url}>
            <li >
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
