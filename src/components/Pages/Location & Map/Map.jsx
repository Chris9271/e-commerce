import React from 'react';
import {GoogleMap, Marker, LoadScript} from '@react-google-maps/api';
import './Map.css';

const Map = ({LatNLng}) => {
    // const containerStyle = {
    //     width: '1000px',
    //     height: '600px'
    // }

    const center = {
        lat: LatNLng[0].coords.lat,
        lng: LatNLng[0].coords.lng
    }

    return (
        <LoadScript googleMapsApiKey={process.env.GOOGLEMAP_APIKEY}>
            <GoogleMap center={center} zoom={14} mapContainerClassName="mobileStyle">
                <Marker position={center}/>
            </GoogleMap>
        </LoadScript>
    )
}

export default Map;
