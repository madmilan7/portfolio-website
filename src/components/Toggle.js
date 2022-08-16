import React from 'react';
import './Toggle.css';

// Icons
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';

const Toggle = ({ check, change }) => {
    return (
        <div
            className='toggle'
            onClick={change}
        >
            <Moon />
            <Sun />
            <div
                className='toggle__button'
                style={check === 'dark' ? { left: '2px' } : { right: '2px' }}
            ></div>
        </div>
    );
};

export default Toggle;