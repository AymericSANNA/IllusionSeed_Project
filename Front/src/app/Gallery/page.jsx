
import React from 'react';
import ScrollButton from '../../../components/Buttons/ScrollButton';
import ImageCard from '../../../components/ImageCards/ImageCard';
import Arrow from './../Images/logo_arrow.png'
import Peaky from './../Images/Peaky.jpg'
import Medal from './../Images/Medal.jpg'

const GalleryPage = () => {
    return (
        <div>
            <div>
                <h2>Gallery</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, eius blanditiis? Perferendis ipsa, id quod voluptates quas necessitatibus doloremque. Error sit inventore sapiente harum eos veniam quisquam quis, maxime, alias illo repellat officiis voluptatibus reiciendis fugit? Debitis optio vel, placeat voluptate, rem cumque ullam nam quibusdam quod autem laboriosam ab.</p>
            </div>
            <div>
                {ScrollButton(Arrow)}
                {ImageCard(Peaky,"Peaky Blinders actor drawing", "Peaky Blinders ", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, eius blanditiis? Perferendis ipsa, id quod voluptates quas necessitatibus doloremque. Error sit inventore sapiente harum eos veniam quisquam quis, maxime, alias illo repellat officiis")}
                {ImageCard(Medal,"Pirates of Carabeans medal drawing", "Peaky Blinders ", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, eius blanditiis? Perferendis ipsa, id quod voluptates quas necessitatibus doloremque. Error sit inventore sapiente harum eos veniam quisquam quis, maxime, alias illo repellat officiis")}
                {ScrollButton(Arrow)}
            </div>
        </div>
    );
};

export default GalleryPage;
