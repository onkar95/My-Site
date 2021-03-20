import React from 'react';
// import image from './images/img8.jpg'
// import Button from '@material-ui/core/Button';
// import Home from './Home';
// import Like from '@material-ui/icons/Favorite';
// import Categori from '@material-ui/icons/SubjectRounded';
import Showing from './Showing';
import Boxes from './Boxes';


function Extrabox() {
    return (
        <>
            <div className="blog-box-container">
                <Boxes />
                <Boxes />
                <Boxes />
            </div>
            <Showing  num="7-9 of 9" />
        </>
    )

}

export default Extrabox;