import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';

// Components
import Card from './Card';

// Images
import heartEmoji from '../assets/images/heartemoji.png';
import glasses from '../assets/images/glasses.png';
import hmuble from '../assets/images/humble.png';

const Services = () => {

    const transition = { duration: 1, type: 'spring' };

    return (
        <div className='services' id='Services'>
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
                <motion.div
                    initial={{ left: '25rem' }}
                    whileInView={{ left: '14rem' }}
                    transition={transition}
                >
                    <Card
                        emoji={heartEmoji}
                        header={'Design'}
                        desc={'Figma, Scetch, Adobe XD'}
                    />
                </motion.div>
                <motion.div
                    initial={{left: '-14rem'}}
                    whileInView={{left: '-7rem'}}
                    transition={transition}
                >
                    <Card
                        emoji={glasses}
                        header={'Developer'}
                        desc={'html, css, js, react'}
                    />
                </motion.div>
                <motion.div
                    initial={{left: '28rem'}}
                    whileInView={{left: '11rem'}}
                    transition={transition}
                >
                    <Card
                        emoji={hmuble}
                        header={'UI/UX'}
                        desc={'html, css, js, react'}
                    />
                </motion.div>
                <div className='blur services__blur-2'></div>
            </div>
        </div>
    );
};

export default Services;