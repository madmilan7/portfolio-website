import React from 'react';
import './Footer.css';

// Images
import wave from '../assets/images/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';

const Footer = () => {
    return (
        <div className='footer'>
            <img src={wave} alt='footer' />
            <div className='footer__content'>
                <span>portfolio@gmail.com</span>
                <div className='footer__icons'>
                    <Insta color='white' size='3rem' />
                    <Facebook color='white' size='3rem' />
                    <Github color='white' size='3rem' />
                </div>
            </div>
        </div>
    );
};

export default Footer;