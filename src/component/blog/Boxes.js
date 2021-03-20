import React, { useEffect, useState } from 'react';
import Like from '@material-ui/icons/Favorite';
import Categori from '@material-ui/icons/SubjectRounded';
import axios from 'axios';




function Boxes(props) {
    // console.log(props);
    const [a, b] = useState(0);
    const [I, setI] = useState(0);
    const [result, setResults] = useState([]);
    const myApiKey = "_BA-gFHx5fF9XA9CMg0hQjAZmB4i67YjAA-sVpKHHIg"
    const img = `https://api.unsplash.com/search/photos?page=1&query="flowers"&client_id=${myApiKey}`
    const img1 = "https://source.unsplash.com/random"
    const arry = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    axios.get(img).then(res => {
        console.log(res.data);
        setResults(res.data.results[0].urls.small)
        console.log(result, 'reg');
    })

    const day = () => {
        let a = new Date().getDate()
        return a;
    }
    const month = () => {

        let today = new Date()
        let b = today.toLocaleString('default', { month: 'short' })
        return b;
    }
    const year = () => {
        let b = new Date().getUTCFullYear()
        return b;
    }
    const add = () => {
        if (a <= b) {
            b(a + 1)
        }
    }

    // setI(Math.floor(Math.random() * 10));
    // console.log('i', I)


    return (
        <>
            {/* {results.map((img) => {
                        <img src={img.url.small} alt=" is loading" className=""></img>
                    })
                    } */}

            <div className="boxes">
                <div>
                    <img src={props.img} alt=" is loading" style={{height:props.height}}></img>
                </div>
                <div>
                    <h2> Hello and Welcome</h2>
                    <div className="starting-of-box">
                        <button className="box-buttons"></button>
                        <button className="box-buttons"><Categori />categorie</button>
                        <div className="box-buttons" ><div><Like onClick={add} /></div></div>
                        <div className="box-buttons">0 comment</div>
                    </div>
                    <p className="middle-of-box">ref attribute requires a valid value
                    to be accessible. Provide a valid, navigable address as the href
                    value. If you cannot provide a valid href, but still need the
                    a valid value to be accessible. Provide a valid, navigable re
                 ss as the href value. If you cannot provide a valid href, but still need the element to r</p>
                    <hr />
                    <div className="bottom-of-box">
                        <div className="date">
                            <span><b>{day()}</b> </span>
                        </div>

                        <div className="month-year">
                            <span>|{month()}</span>
                            <span>|{year()}</span>
                        </div>
                        <div className="show-btn">
                            <button className="bottom-box-button" >show more</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Boxes;