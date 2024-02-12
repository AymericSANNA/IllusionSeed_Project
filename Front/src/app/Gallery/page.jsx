
"use client"
import React from 'react';
import ImageCard from '../../../components/ImageCards/ImageCard';
import CardDescription from '../../../components/CardDescription/CardDescription'
import Peaky from './../Images/Peaky.jpg'
import Medal from './../Images/Medal.jpg'
import Dodge from './../Images/Dodge.jpg'
import Fester from './../Images/Fester.jpg'
import FlowerWoman from './../Images/FlowerWoman.jpg'
import './Gallery.css'


const GalleryPage = () => {
    return (
        <div>
            <div>
                <h2>Gallery</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, eius blanditiis? Perferendis ipsa, id quod voluptates quas necessitatibus doloremque. Error sit inventore sapiente harum eos veniam quisquam quis, maxime, alias illo repellat officiis voluptatibus reiciendis fugit? Debitis optio vel, placeat voluptate, rem cumque ullam nam quibusdam quod autem laboriosam ab.</p>
            </div>
            <div className='slider-container'>
                {/* {Button(Arrow)} */}
                <div className='slider-images-container'>

                    {ImageCard
                    (Peaky,
                    "Peaky Blinders actor drawing",
                    "Peaky Blinders ",
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, eius blanditiis? Perferendis ipsa, id quod voluptates quas necessitatibus doloremque. Error sit inventore sapiente harum eos veniam quisquam quis, maxime, alias illo repellat officiis"
                     )}

                    {ImageCard
                    (Medal,
                    "Pirates of Carabeans's medal drawing", 
                    "Pirates of Carabeans's medal", 
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, eius blanditiis? Perferendis ipsa, id quod voluptates quas necessitatibus doloremque. Error sit  alias illo repellat officiis"
                    )}

                    {ImageCard
                    (Dodge,
                    "Pirates of Carabeans's medal drawing", 
                    "Pirates of Carabeans's medal", 
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, eius blanditiis? Perferendis ipsa, id quod voluptatesoloremque. Error sit invents"
                    )}

                    {ImageCard
                    (Fester,
                    "Pirates of Carabeans's medal drawing", 
                    "Pirates of Carabeans's medal", 
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, eius blanditiis? Perferendis ipsa, id quod voluptates quas necessitatibus doloremque. Error repellat officiis"
                    )}

                    {ImageCard
                    (FlowerWoman,
                    "Pirates of Carabeans's medal drawing", 
                    "Pirates of Carabeans's medal", 
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, eius blanditiis? Perferendis ipsa, id quod voluptates quas necessitatibus doloremque. , maxime, alias illo repellat officiis"
                    )}
                    
                </div>
                {/* {Button(Arrow)} */}
            </div>
        </div>
    );
};

export default GalleryPage;
