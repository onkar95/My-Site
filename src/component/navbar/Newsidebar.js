import React, { useContext } from 'react'
import { UserContext } from '../../UserContext';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../auth/App.css';
import { Link } from '@material-ui/core';
import { Redirect } from 'react-router';



const Newsidebar = (props) => {
    const { user, setUser } = useContext(UserContext);
    const logout = async () => {
        try {
            // const res = await fetch('https://new-chat-app-udmy.herokuapp.com/logout', {
            const res = await fetch('http://localhost:5000/logout', {
                credentials: 'include',
            });
            const data = res.json();
            console.log('logout data', data);
            setUser(null)
        } catch (error) {
            console.log(error)
        }

    }
    if (user) {
        return <Redirect to='/home'/>
    }
    return (
        <div className="App" >
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={"/login"}>My store</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href={"/login"}>Sign in</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={"/register"}>Sign up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Newsidebar;