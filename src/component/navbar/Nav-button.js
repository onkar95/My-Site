import React from 'react';
import { Link } from 'react-router-dom'




function NavButton() {

    return (
        <div className="nav-button">
            <div className="dropdown">
                <Link className="dropbtn" to='/home'  >HOME</Link>
                <div className="dropdown-content">
                    <div className="dropdown-content-grid">
                        <Link to="">Link 1</Link>
                        <Link to="">Link 2</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                    </div>
                </div>
            </div>
            <div className="dropdown">
                <Link className="dropbtn" to='/account' >Account</Link>
                <div className="dropdown-content">

                    <div className="dropdown-content-grid">
                        <Link to="">Link 1</Link>
                        <Link to="">Link 2</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                    </div>
                </div>
            </div>
            <div className="dropdown">
                <Link className="dropbtn" to='/about' >About</Link>
                <div className="dropdown-content">

                    <div className="dropdown-content-grid">
                        <Link to="">Link 1</Link>
                        <Link to="">Link 2</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                    </div>
                </div>
            </div>
            <div className="dropdown">
                <Link className="dropbtn" to='/blog' >BLOG</Link>
            </div>
            <div className="dropdown">
                <Link className="dropbtn" to='/contact' >CONTACT</Link>
            </div>
        </div>
    )
}


export default NavButton;