import React from 'react';
import {NavLink} from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="container-fluid wrap-picture">
            <div className="row">
            <div className="col s12 m12 l6 shopmen">
                <img src="/men.jpeg" alt="" className="men-image"/>
                <div className="men">SPRING 2021 LOOKBOOK</div>
                <NavLink to="/men">
                    <button className="menbtn1">SHOP MEN'S</button>
                </NavLink>
                <NavLink to="/women">
                    <button className="menbtn2">SHOP WOMEN'S</button>
                </NavLink>
            </div>
            <div className="col s12 m12 l6 shopwomen">
                <img src="/women.jpeg" alt="" className="women-image"/>
                <div className="women">NEW DESIGNS FOR SPRING</div>
                <NavLink to="/men">
                    <button className="womenbtn1">SHOP MEN'S</button>
                </NavLink>
                <NavLink to="/women">
                    <button className="womenbtn2">SHOP WOMEN'S</button>
                </NavLink>
            </div>
            </div>
        </div>
    )
}

export default Home;
