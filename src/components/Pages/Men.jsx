import React from 'react'
import ProductList from '../Products/ProductList';
import {connect} from 'react-redux';

import './Men.css';

const Men = ({filteredMen}) => {
    // const path = props.match.url.slice(1);
    // const filteredMen = Products.filter(list => list.gender === path);
    return (
        <div className="container men-products">
            <ProductList items={filteredMen}/>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const path = ownProps.match.url.slice(1);
    return {
        filteredMen: state.Products.filter(list => list.gender === path)
    }
}

export default connect(mapStateToProps)(Men);

