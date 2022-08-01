import React from 'react';
import './Works.css';

// Images 
import upWork from '../assets/images/Upwork.png';
import fiverr from '../assets/images/fiverr.png';
import amazon from '../assets/images/amazon.png';
import shopify from '../assets/images/Shopify.png';
import facebook from '../assets/images/Facebook.png';

const Works = () => {
    return (
        <div className='works'>
            {/* left side */}
            <div className='works__awesome'>
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <span>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,<br />
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </span>
                <button className='button works__button'>Hire me</button>
                <div className='blur works__blur-1'></div>
            </div>
            {/* right side */}
            <div className='works__icons'>
                <div className='works__mainCircle'>
                    <div className='works__circle'>
                        <img src={upWork} alt='upwork' />
                    </div>
                    <div className='works__circle'>
                        <img src={fiverr} alt='fiverr' />
                    </div>
                    <div className='works__circle'>
                        <img src={amazon} alt='amazon' />
                    </div>
                    <div className='works__circle'>
                        <img src={facebook} alt='facebook' />
                    </div>
                    <div className='works__circle'>
                        <img src={shopify} alt='shopify' />
                    </div>
                </div>
                {/* background circle */}
                <div className='works__backCircle blueCircle'></div>
                <div className='works__backCircle yellowCircle'></div>
                <div className='blur works__blur-2'></div>
            </div>
        </div>
    );
};

export default Works;