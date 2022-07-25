import React from 'react';
import './FloatDiv.css';

// Images


const FloatDiv = ({ image, txt1, txt2 }) => {
    return (
        <div className='floatdiv'>
            <img src={image} alt='emoji' />
            <span>
                {txt1}
                <br />
                {txt2}
            </span>
        </div>
    );
};

export default FloatDiv;