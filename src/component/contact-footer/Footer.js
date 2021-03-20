import './contactAndFooter.css'
import React from 'react';
// import image from './images/img8.jpg'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div id="footer">
                <div className="footer-items">
                    &copy;
                    My $tore all rights reserved.
                </div>
                <div className="footer-li">
                    <ul className="footer-links footer-items">
                        <div><Link to="/home">Contact Press</Link></div>
                        <div><Link to="/home">FAQ</Link></div>
                        <div><Link to="/home">Shipping & Returns</Link></div>
                        <div><Link to="/home">Term & Conditions</Link></div>
                    </ul>
                </div>
                {/* <div className="footer-img footer-items">
            <Link to=""> <img src={image} alt="" /></Link>
            <Link to=""> <img src={image} alt="" /></Link>
            <Link to=""> <img src={image} alt="" /></Link>
            <Link to=""> <img src={image} alt="" /></Link>
        </div> */}
            </div>
        </>
    )
}

export default Footer;
