import Image from 'next/image'
import React from 'react'

function NavMobileButton(name,url) {
    return (

        <li>
            <a href={url}>
                <Image 
                    src={name}
                    width={70} 
                    height={70} 
                    alt="Menu Logo" />
            </a>
        </li>

    )
}

export default NavMobileButton
