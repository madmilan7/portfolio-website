import React from 'react';
import './Card.css';

const Card = ({ emoji, header, desc }) => {
    return (
        <div className='card'>
            <img src={emoji} alt='heartemoji' />
            <span>{header}</span>
            <span>{desc}</span>
            <button className='card__button'>LEARN MORE</button>
        </div>
    );
};

export default Card;