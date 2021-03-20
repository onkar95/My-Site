import React from 'react';
// import Boxes from './Boxes';
import image from '../images/img8.jpg'
// import Arrowl from '@material-ui/icons/ArrowBackIos';
// import Arrowr from '@material-ui/icons/ArrowForwardIos';
// import {Link, useLocation} from 'react-router-dom'
// import Showing from './Showing';
import {Link} from 'react-router-dom'

function blogRight(params) {
    
    return (

        <div className="blog-menu">
            <div className="menu-home">
                <h2>home</h2>
                <hr />
                <ul>
                    <li>cloths</li>
                    <li>Accessories</li>
                    <li>blogs</li>
                </ul>
            </div>
            <div className="menu-categories">
                <h2>Blog Categories</h2>
                <hr />
                <button>categorie 1</button>
                <div className="dropdown">
                    <button className="dropbtn collaps">+</button>
                    <div className="dropdown-content">
                        <Link to="/home">Link 1</Link>
                        <Link to="/home">Link 2</Link>
                    </div>
                </div>
            </div>
            <div className="menu-articles">
                <h2>Recent Articles</h2>
                <hr />
                <div className="menu-article">
                    <img src={image} alt=" is loading"></img>
                    <div className="menu-article-content">
                        <Link to="/home" className="article-link">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                        <p>Dec ,18 2020</p>
                    </div>
                </div>
                <hr />

            </div>
            <div className="menu-tag-post">
                <h2>Tags Post</h2>
                <hr />
                <Link to="/home" className="posts">Onkar</Link>
                <Link to="/home" className="posts">Onkar</Link>
                <Link to="/home" className="posts">Onkar</Link>
                <Link to="/home" className="posts">Onkar</Link>
                <Link to="/home" className="posts">Onkar</Link>
                <Link to="/home" className="posts">Onkar</Link>
                <Link to="/home" className="posts">Onkar</Link>
                <Link to="/home" className="posts">Onkar</Link>
                <Link to="/home" className="posts">Onkar</Link>
            </div>
        </div>
        
    )
}

export default blogRight;