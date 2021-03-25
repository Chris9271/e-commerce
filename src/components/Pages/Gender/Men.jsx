import React from 'react';
import {connect} from 'react-redux';
import ProductList from '../../Products/ProductList';
import Footer from '../../Header/Footer';
import './Men.css';

const Men = ({filteredMen}) => {
    // const path = props.match.url.slice(1);
    // const filteredMen = Products.filter(list => list.gender === path);
    return (
        <>
        <div className="container men-products">
            <ProductList items={filteredMen}/>
        </div>
            <Footer/>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    const path = ownProps.match.url.slice(1);
    return {
        filteredMen: state.cart.Products.filter(list => list.gender === path)
    }
}

export default connect(mapStateToProps)(Men);

