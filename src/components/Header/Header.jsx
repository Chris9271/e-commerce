import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {userSignOut} from '../Pages/SignIn & SignUp/authAction';
import './Header.css';

const Header = ({status, userLogout}) => {
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
                        <li className="target1"><NavLink to="/men" className="hoverLink-bg">Mens</NavLink></li>
                        <li className="target2"><NavLink to="/women" className="hoverLink-bg">Womens</NavLink></li>
                        <li className="target3"><NavLink to="/location" className="hoverLink-bg">Location</NavLink></li>
                        {!status.auth.uid ?
                        <li className="target5"><NavLink to="/signup" className="hoverLink-bg">Sign In</NavLink></li>
                        :
                        <li className="target5" onClick={() => userLogout()}><NavLink to="/" className="hoverLink-bg">Sign Out</NavLink></li>
                        }
                        <li className="target4"><NavLink to="/cart" className="hoverLink-bg"><i className="material-icons">shopping_cart</i></NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>     
    )
}

const mapStateToProps = (state) => {
    return{
        status: state.firebase
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        userLogout: () => dispatch(userSignOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
