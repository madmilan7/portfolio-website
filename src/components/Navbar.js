import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__toggle'>
                <div className='navbar__name'>Andrew</div>
                <span>toggle</span>
            </div>
            <div className='navbar__menu'>
                <div className='navbar__list'>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <button className='navbar__button button'>Contact</button>
            </div>
        </div>
    );
};

export default Navbar;