import React from 'react';
import './Services.css';

// Components
import Card from './Card';

// Images
import heartEmoji from '../assets/images/heartemoji.png';
import glasses from '../assets/images/glasses.png';
import hmuble from '../assets/images/humble.png';

const Services = () => {
    return (
        <div className='services'>
            {/* left side */}
            <div className='services__awesome'>
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,<br />
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
                <button className='button services__button'>Download CV</button>
                <div className='blur services__blur-1'></div>
            </div>
            {/* right side */}
            <div className='services__cards'>
                <div>
                    <Card
                        emoji={heartEmoji}
                        header={'Design'}
                        desc={'Figma, Scetch, Adobe XD'}
                    />
                </div>
                <div>
                    <Card
                        emoji={glasses}
                        header={'Developer'}
                        desc={'html, css, js, react'}
                    />
                </div>
                <div>
                    <Card
                        emoji={hmuble}
                        header={'UI/UX'}
                        desc={'html, css, js, react'}
                    />
                </div>
                <div className='blur services__blur-2'></div>
            </div>
        </div>
    );
};

export default Services;