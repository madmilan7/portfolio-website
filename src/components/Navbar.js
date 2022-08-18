import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

// Components
import Toggle from './Toggle';

const Navbar = ({ check, change }) => {
    return (
        <div className='navbar' id='Navbar'>
            <div className='navbar__toggle'>
                <div className='navbar__name'>MadMilan</div>
                <Toggle check={check} change={change} />
            </div>
            <div className='navbar__menu'>
                <div className='navbar__list'>
                    <ul>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true}>
                            <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                            <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonials' smooth={true}>
                            <li>Testimonials</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                    <button className='navbar__button button'>Contact</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;