import React from 'react';
import './contactAndFooter.css'
// import image from './images/img8.jpg'
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import Navbar from '../navbar/Navbar';
import Footer from './Footer';

function Contact() {
    return (
        <>
                        <Navbar/>
            <div id="contact">
            <div className='contact'>
                <div className="contact-text">
                    <div className="contact-txt">
                        <i></i>
                        <h1 className="contact-h1">Get in touch</h1>
                        <p className="contact-p">Subscribe for latest stories and blog</p>
                    </div>
                </div>
                <div className="contact-form">
                    <input type="text " placeholder="enter your email" />
                    <button>subscribe</button>
                </div>
                </div>
                <hr/>
            <div className='connect-end'>
                <h1 className="connect-text">Connect us</h1>
                <ul className="contact-a">
                    <a href="https://www.facebook.com/onkar.kotule.50" target="_blank" rel="noreferrer" ><Facebook /></a>
                    <a href="https://www.instagram.com/95onkar/" target="_blank" rel="noreferrer" ><Instagram /></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer" ><Twitter /></a>
                </ul>
            </div>
            </div>
            <Footer />

        </>
    )
}

export default Contact;