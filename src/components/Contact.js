import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact' id='Contact'>
            <div className='contact__left'>
                <div className='contact__title'>
                    <span>Get in touch</span> 
                    <span>Contact me</span>
                    <div className='blur contact__blur-1'></div>
                </div>
            </div>
            {/* form */}
            <div className='contact__form'>
                <form>
                    <input type="text" name="userName" className="contact__user" placeholder="Name" />
                    <input type="email" name="email" className="contact__user" placeholder="Email" />
                    <textarea name="message" className="contact__user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />
                    <div className='blur contact__blur-2'></div>
                </form> 
            </div>
        </div>
    );
};

export default Contact;