import React from 'react';
import HoverImage from 'react-hover-image';
import {Link} from 'react-router-dom';
import './ProductItem.css';

const ProductItem = (props) => {
    // 不用card做看看
    return (
            <div className="product-box">
                <div className="content-box">
                <div className="product-image">
                    <Link to={`/${props.gender}/${props.id}`}>
                        <HoverImage src={props.image} hoverSrc={props.hoverImage} alt="" className="adjust-size"/>
                    </Link>
                </div>
                <div className="name-price">
                    <span className="product-title">{props.productName}</span>
                    <span className="product-price">${props.price}</span>
                </div>
                </div>
            </div>
            )
    }
        // <div className="col s12 m3">
        //     <div className="card">
        //         <div className="card-image">
        //                 <Link to={`/${props.gender}/${props.id}`}>
        //                     <HoverImage src={props.image} hoverSrc={props.hoverImage} alt=""/>
        //                 </Link>
        //         </div>
        //         <div className="card-content">
        //             <span className="card-title">{props.productName}</span>
        //             <br/>
        //             <p>CAD ${props.price}</p>
        //         </div> 
        //         </div>
        // </div>

export default ProductItem;
