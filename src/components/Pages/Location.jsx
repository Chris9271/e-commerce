import React from 'react';
import Map from './Map';
import {connect} from 'react-redux';
import './Location.css';

const Location = ({headStore}) => {

    if(headStore.length === 0){
        return(
            <div className="row container center">
                <h5>Can't locate the store!</h5>
            </div>
        )
    }

    let showStore = headStore.map(item => {
        return(
            <div className="row container" key={item.name}>
                <div className="col s12 m12 l6">
                    <img src={item.imgSrc} alt="" className="store-image"/>
                </div>
                    <div className="col s12 m12 l6 store-detail">
                        <h4>{item.name}</h4>
                        <p>Address: {item.address}</p>
                        <p>Phone: {item.phone}</p>
                        <p>Business Hour: {item.businessHour}</p>
                    </div>
            </div>
        )
    })
    
    return (
        <div className="container location-map">
            <Map LatNLng={headStore}/>
            {showStore}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        headStore: state.Location
    }
}

export default connect(mapStateToProps)(Location);
