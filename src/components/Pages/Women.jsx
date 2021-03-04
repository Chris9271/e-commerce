import React from 'react';
import ProductList from '../Products/ProductList';
import {connect} from 'react-redux';
import './Women.css';

const Women = ({filteredWomen}) => {
    // const path = props.match.url.slice(1);
    // const filteredWomen = Products.filter(list => list.gender === path);
    return (
        <div className="container women-products">
            <ProductList items={filteredWomen}/>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const path = ownProps.match.url.slice(1);
    return {
        filteredWomen: state.Products.filter(list => list.gender === path)
    }
}

export default connect(mapStateToProps)(Women);
