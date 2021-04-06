import React from 'react';
import GoogleMapReact from 'google-map-react';
// import {GoogleMap, Marker, LoadScript} from '@react-google-maps/api';
import './Map.css';

const Map = ({locate}) => {

    const center = {
        lat: locate.lat,
        lng: locate.lng
    }

    const DefaultMark = ({text}) => (
        <div className="markStyle">
            {text}
        </div>
    )

    return (
        <div className="mobileStyle">
            <GoogleMapReact
                bootstrapURLKeys={process.env.GOOGLEMAP_APIKEY}
                defaultCenter={center}
                defaultZoom={14}
            >
                <DefaultMark
                    lat={center.lat}
                    lng={center.lng}
                    text={'Here'}
                />
            </GoogleMapReact>
        </div>
        // <LoadScript googleMapsApiKey={process.env.GOOGLEMAP_APIKEY}>
        //     <GoogleMap center={center} zoom={14} mapContainerClassName="mobileStyle">
        //         <Marker position={center}/>
        //     </GoogleMap>
        // </LoadScript>
    )
}

export default Map;
