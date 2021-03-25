import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="page-footer grey darken-1">
            <div className="row container">
                {/* <div className="col l4 offset-12 s12">
                    <img src="/logo1.png" alt="lobinton" className="brand-logo center foot-img"/>
                </div> */}
                <div className="col l6 offset-12 s6">
                    <ul>
                        <li><a className="white-text text-lighten-3" href="#!">Contact Us</a></li>
                        <li><a className="white-text text-lighten-3" href="#!">Returns & Refunds</a></li>
                        <li><a className="white-text text-lighten-3" href="#!">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="col l6 offset-12 s6">
                    <ul>
                        <li><a className="white-text text-lighten-3" href="#!">Store Locator</a></li>
                        <li><a className="white-text text-lighten-3" href="#!">Privacy Policy</a></li>
                        <li><a className="white-text text-lighten-3" href="#!">About</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
