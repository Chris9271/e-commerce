import React from 'react';
import {connect} from 'react-redux';
import ProductList from '../../Products/ProductList';
import Footer from '../../Header/Footer';
import './Women.css';

const Women = ({filteredWomen}) => {
    // const path = props.match.url.slice(1);
    // const filteredWomen = Products.filter(list => list.gender === path);
    return (
        <>
        <div className="container women-products">
            <ProductList items={filteredWomen}/>
        </div>
            <Footer/>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    const path = ownProps.match.url.slice(1);
    return {
        filteredWomen: state.cart.Products.filter(list => list.gender === path)
    }
}

export default connect(mapStateToProps)(Women);
