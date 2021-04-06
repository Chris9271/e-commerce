import React from 'react';
import ProductItem from './ProductItem';

const ProductList = (props) => {
    if(props.items.length === 0){
        return (
            <div className="row center">
                <h4>Can't find any product...</h4>
            </div>
        )
    }
    return (
        <>
            {props.items.map(item => (
                <ProductItem key={item.id} {...item}/>
            ))}
        </>
    )
}

export default ProductList;
