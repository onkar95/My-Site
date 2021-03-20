import React from 'react';
// import Boxes from './Boxes';
// import image from './images/img8.jpg'
import Arrowl from '@material-ui/icons/ArrowBackIos';
import Arrowr from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom'

function Showing(props) {
    return (
        <>
            <div className="blog-page-info">
                <div className="page-info-content">
                    <p>  Showing {props.num }</p>
                </div>
                <div className="number-buttons" >
                    <div>
                        <Link to="/blog"><Arrowl /></Link>
                    </div>
                    <div>
                        <Link to="/blog">1</Link>
                    </div>
                    <div>
                        <Link to="/blog-boxes">2</Link>
                    </div>
                    <div>
                        <Link to="/blog-boxes"  ><Arrowr /></Link>
                    </div>
                </div>
            </div>

        </>
    )

}
export default Showing;