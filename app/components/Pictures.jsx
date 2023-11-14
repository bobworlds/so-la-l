import React from 'react';
import imageData from '../datas/images.json';

function Pictures() {

    const imageLinks = [
        "./products/8667777040715",
        "https://example.com/image2",
        "https://example.com/image3",
        "https://example.com/image4",
    ];

    const renderImages = () => {
        return imageData.map((image, index) => {
            const tirage = image.tirage;
            const link = imageLinks[index];
            return (
                <div className='all_item' key={index + 1}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={image.src} alt={image.title} className='img_solo' />
                    </a>
                    <p className='compteur'>{tirage}/200</p>
                </div>
            );
        });
    };

    return (
        <div className='conteneur_global'>
            {renderImages()}
        </div>    
    );
}

export default Pictures;