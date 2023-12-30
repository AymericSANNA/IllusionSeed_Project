import React from 'react'
import Image from 'next/image'

function ScrollButton(name) {
    return (
        <Image 
                    src={name}
                    width={70} 
                    height={70} 
                    alt="Menu Logo" />
    )
}

export default ScrollButton
