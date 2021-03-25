import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../Header/Footer';
import './Home.css';

const Home = () => {
    return (
        <>
        {/* .container-fluid class provides a full width container */}
        <div className="container-fluid wrap-picture">
            <div className="row">
            <div className="col s12 m12 l6 shopmen">
                <img src="/men.jpeg" alt="" className="men-image"/>
                <div className="men">SPRING 2021 LOOKBOOK</div>
                <Link to="/men">
                    <button className="menbtn1">SHOP MEN'S</button>
                </Link>
                <Link to="/women">
                    <button className="menbtn2">SHOP WOMEN'S</button>
                </Link>
            </div>
            <div className="col s12 m12 l6 shopwomen">
                <img src="/women.jpeg" alt="" className="women-image"/>
                <div className="women">NEW DESIGNS FOR SPRING</div>
                <Link to="/men">
                    <button className="womenbtn1">SHOP MEN'S</button>
                </Link>
                <Link to="/women">
                    <button className="womenbtn2">SHOP WOMEN'S</button>
                </Link>
            </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Home;
