import React from 'react';
import {connect} from 'react-redux';
import Map from './Map';
import Footer from '../../Header/Footer';
import './Location.css';

const Location = ({headStore}) => {
    
    let showStore = headStore.map(item => {
        return(
        <div key={item.name}>
            <Map locate={item.coords}/>
                <div className="row store-info">
                    <div className="col s12 m6 l6 store-pic">
                        <img src={item.imgSrc} alt="" className="store-image"/>
                    </div>
                    <div className="col s12 m6 l6 store-detail">
                        <h4>{item.name}</h4>
                        <p>Address: {item.address}</p>
                        <p>Phone: {item.phone}</p>
                        <p>Business Hour: {item.businessHour}</p>
                    </div>
                </div>
        </div>
        )
    })
    
    return (
    <div className="outside-box">
        <div className="location-map">
            {showStore}
        </div>  
            <Footer/>
    </div>
    )
}

const mapStateToProps = (state) => {
    return{
        headStore: state.cart.Location
    }
}

export default connect(mapStateToProps)(Location);
