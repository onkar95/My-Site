import React, { useState } from 'react';
import Search from '@material-ui/icons/Search';
import Cart from '@material-ui/icons/AddShoppingCart';
import Like from '@material-ui/icons/Favorite';
import Account from '@material-ui/icons/AccountCircle';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import { Link } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'
// import { response } from 'express';



function NavbarRight(props) {
    const [logins, loginh] = useState('none');
    const [carts, carth] = useState('none');
    // let location = useLocation();

    const LoginDropdown = () => {
        if (logins === 'none') {
            loginh('block');
            carth('none');


        } else {
            loginh('none');
        }
    }
    const CART = () => {
        if (carts === 'none') {
            carth('block');
            loginh('none');

        } else {
            carth('none');

        }
    }

    const close = () => {
        if (logins === 'block') {
            loginh('none');
        }

    }


    const [OldValue, setValue] = useState({
        name: '',
        password: ''

    })
    function onChange(a) {
        const { name, value } = a.target;
        setValue(previous => {
            return {
                ...previous,
                [name]: value
            }
        })
    }

    function onClick(a) {
        a.preventDefault()

  

        // window.location('/blog')
    }




    return (
        <div className="right-buttons"  style={{ display: props.display }} >
            <div className="dropbtn new-dropbtn"><Search /></div>
            <div className="dropdown">
                <div className="dropbtn"   onClick={LoginDropdown}><Account /></div>
                <div className="dropdown-content login" style={{ display: logins }} >
                    <div className="login-content">
                        <form encType="multipart/form-data" method="post"  className="login-form">
                            <h1>Login to  Account</h1>
                            <div className="input">
                                <input type="text"
                                    value={OldValue.name}
                                    onChange={onChange}
                                    name="name"
                                    id="name"
                                    placeholder="Username"
                                    autoComplete="off" />
                                <input type="text"
                                    value={OldValue.password}
                                    onChange={onChange}
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    autoComplete="off" />
                            </div>
                            <div className="checkbox-a" data-toggle="buttons">
                                <span style={{ display: 'flex', margin: '10px 2px' }}>
                                    <input type="checkbox" id="" autocomplete="off" style={{ margin: '2px' }} />
                                    <div>Remember me</div>
                                </span>
                                <Link to="" className="forgt-pass" onClick={close}>forget password</Link>
                            </div>
                            <button className="login-btn" onClick={onClick} >Login</button>
                            <div>
                                <Link to="/register" onClick={close} className="cret-account">No Account?Create here?</Link>
                            </div>

                            <hr className="hr-form" />
                            <h2 className="connect">Connect us</h2>
                            <ul className="social-media">
                                <a href="https://www.facebook.com/onkar.kotule.50" target="_blank" rel="noreferrer" ><Facebook /></a>
                                <a href="https://www.instagram.com/95onkar/" target="_blank" rel="noreferrer" ><Instagram /></a>
                                <a href="https://www.twitter.com" target="_blank" rel="noreferrer" ><Twitter /></a>
                            </ul>
                        </form>

                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
            <div className="dropbtn"><Like /></div>
            <div className="dropdown">
                <div className="dropbtn" onClick={CART}><Cart /></div>
                <div className="dropdown-cart " style={{
                    display: carts,
                    //  overflow: 'hidden',
                }}>
                    <div className="cart  ">

                        <p>Your cart is empty</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavbarRight;