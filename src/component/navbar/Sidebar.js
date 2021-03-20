import React from 'react';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import { Link } from 'react-router-dom'
import "../../App.css"
import "./sidebar.css"
import Register from "../auth/Register"
import AccountLogo from '@material-ui/icons/AccountCircle';

function Sidebar(props) {
    return (
        <>

            <div id="sidebar" className='example'>
                <div id="mySidebar" className="sidebar example" style={{
                    overflow:'scroll'
                }} >

                    <div className='sidebar-upper'>
                        <div className='img m-2'>
                        <AccountLogo />
                        </div>
                        <div className='name m-2'>
                            <h2>your name</h2>
                            <h6>sample@gmail.com</h6>
                        </div>
                    </div>
                    <hr />
                    <div className="">
                        <Link><h4>Logut</h4></Link>
                        <Link to='register' onClick=''><h4>regiter new user</h4>  </Link>
                        <Link><h4>update profile</h4></Link>
                        
                    </div>
                    <div className="connectus" style={{ marginBottom: '20px' }}>
                        <h2 className="connect">Connect us</h2>
                        <ul className="social-media">
                            <Link to=""><Facebook /></Link>
                            <Link to=""><Instagram /></Link>
                            <Link to=""><Twitter /></Link>
                        </ul>
                    </div>
                </div>
                <div id="main" className="">
                </div>
            </div>

        </>
    )
}

export default Sidebar;