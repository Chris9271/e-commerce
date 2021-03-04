import React from 'react';
import HoverImage from 'react-hover-image';
import {Link} from 'react-router-dom';

const ProductItem = (props) => {
    return (
        <div className="col s12 m6">
            <div className="card">
                <div className="card-image">
                        <Link to={`/${props.gender}/${props.id}`}>
                            <HoverImage src={props.image} hoverSrc={props.hoverImage} alt=""/>
                        </Link>
                    {/* <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a> */}
                </div>
                <div className="card-content">
                    <span className="card-title">{props.productName}</span>
                    <p>{props.description}</p>
                    <br/>
                    <p>CAD ${props.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;
