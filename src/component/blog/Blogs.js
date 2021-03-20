import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../UserContext';
import { Redirect } from 'react-router-dom';
import Boxes from './Boxes';
// import image from './images/img8.jpg'
// import Arrowl from '@material-ui/icons/ArrowBackIos';
// import Arrowr from '@material-ui/icons/ArrowForwardIos';
// import {Link, useLocation} from 'react-router-dom'
import Showing from './Showing';
import Navbar from '../navbar/Navbar';
import Footer from '../contact-footer/Footer';
// import {Link} from 'react-router-dom'


function Blog() {

    const imgArry =[
        {img:"https://images.unsplash.com/photo-1615907886969-f1f003bbd6f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"},
        {img:"https://source.unsplash.com/random"},
        {img:"https://source.unsplash.com/random"},
        {img:"https://source.unsplash.com/random"},
        {img:"https://source.unsplash.com/random"},
        {img:"https://source.unsplash.com/random"},
    ]
    const [box,setBox]=useState()

    const funImg = () => {
        return(
        <Boxes
            img={imgArry.img} />
        )
}

    return (
        <>
            <Navbar />

            <div id="blog">
                <div className="blog">
                    <div className="blog-h1">
                        <h1>welcome to my blog</h1>
                    </div>
                    <div className="blog-box-container">
                        {/* {imgArry.map(funImg)} */}
                        <Boxes img="https://images.unsplash.com/photo-1615907886969-f1f003bbd6f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"  height='600px'/>
                        <Boxes img='https://images.unsplash.com/photo-1615458318132-1f151a3d18f4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'  height='600px'/>
                        <Boxes img='https://images.unsplash.com/photo-1613673051643-ab62fe465924?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'  height='600px' />
                        <Boxes img='https://images.unsplash.com/photo-1614483573015-fc4ceb584797?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'  height='600px'/>
                        <Boxes img='https://images.unsplash.com/photo-1615289644696-4f9eb914f3bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=min&height=10px' height='600px'/>
                        <Boxes img='https://images.unsplash.com/photo-1615420733289-d8d75ca63946?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'  height='600px'/>
                    </div>
                    <Showing num="1-6 of 9"/>
                </div>
            </div>
            <Footer/>


        </>
    )
}


export default Blog;
