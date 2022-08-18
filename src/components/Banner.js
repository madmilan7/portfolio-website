import React from 'react';
import './Banner.css';
import { motion } from 'framer-motion';

// Components
import FloatDiv from './FloatDiv';

// Images
import github from '../assets/images/github.png';
import linkedIn from '../assets/images/linkedin.png';
import instagram from '../assets/images/instagram.png';
import vector1 from '../assets/images/Vector1.png';
import vector2 from '../assets/images/Vector2.png';
import boy from '../assets/images/boy.png';
import thumbup from '../assets/images/thumbup.png';
import crown from '../assets/images/crown.png';
import glassesemoji from '../assets/images/glassesimoji.png';

const Banner = () => {

    const transition = { duration: 2, type: 'spring' };

    return (
        <div className='banner'>
            {/* leftSide banner */}
            <div className='banner__left'>
                <div className='banner__name'>
                    <span>Hy! I Am</span>
                    <span>Mahdi Bagheri</span>
                    <span>
                        Frontend Developer with high level
                        of experience in web designing and development,
                        producting the quality work.
                    </span>
                </div>
                <button className='button banner__button'>Hire me</button>
                <div className='banner__icons'>
                    <img src={github} alt='github' />
                    <img src={linkedIn} alt='linkedIn' />
                    <img src={instagram} alt='instagram' />
                </div>
            </div>
            {/* rightSide banner */}
            <div className='banner__right'>
                <img src={vector1} alt='blue' />
                <img src={vector2} alt='yellow' />
                <img src={boy} alt='boy' />
                <motion.img
                    src={glassesemoji}
                    alt='emoji'
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}
                />
                <motion.div
                    className='floatdivpos1'
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                >
                    <FloatDiv image={crown} txt1='Web' txt2='Developer' />
                </motion.div>
                <motion.div
                    className='floatdivpos2'
                    initial={{left: '9rem', top: '18rem'}}
                    whileInView={{left: '2rem'}}
                    transition={transition}
                >
                    <FloatDiv image={thumbup} txt1='Best Design' txt2='Award' />
                </motion.div>
                {/* blur div */}
                <div className='blur blur-1'></div>
                <div className='blur blur-2'></div>
            </div>
        </div>
    );
};

export default Banner;