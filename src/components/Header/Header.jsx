import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
    <nav>
        <div className="nav-wrapper grey darken-1">
            <div className="row container">
                <div className="col s12 left-container">
                    <NavLink to="/">
                        <img src="/logo1.png" alt="lobinton" className="brand-logo left head-img"/>
                    </NavLink>
                </div>
                <div className="col s12 right-container">   
                    <ul className="right">
                        <li className="target1"><NavLink to="/men">Mens</NavLink></li>
                        <li className="target2"><NavLink to="/women">Womens</NavLink></li>
                        <li className="target3"><NavLink to="/location">Location</NavLink></li>
                        <li className="target4"><NavLink to="/cart"><i className="material-icons">shopping_cart</i></NavLink></li>
                        <li className="target5"><a className="waves-effect wave-light btn"><i className="material-icons left">person</i>SignUp</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>     
    )
}

export default Header;
