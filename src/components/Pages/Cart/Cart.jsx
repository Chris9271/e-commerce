import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Pay from './pay';
import './Cart.css';

const Cart = ({cart, increase, decrease, removeItem}) => {

    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const total = () => {
            let totalPrice = 0;
            for(let i = 0; i < cart.length; i++){
                if(cart.length > 0 && cart[i].quantity >= 1){
                    totalPrice += Number(cart[i].price * cart[i].quantity);
                }
                setCartTotal(totalPrice);
            }
        }
            total();
    }, [cart])

    if(cart.length === 0){
        return(
            <div className="row center emptyCart">
                <h5 className="empty-title">You don't have any item in shopping cart.</h5>
                <Link to="/">
                    <button className="go-home">Back To Home</button>
                </Link>
            </div>
        )
    }

    let itemList = cart.map(item => {
        const handleMinusClick = (e) => {
            e.preventDefault();
            decrease(item.id);
        }

        const handleAddClick = (e) => {
            e.preventDefault();
            increase(item.id);
        }
    
        const handleRemoveClick = (e) => {
            e.preventDefault();
            removeItem(item.id);
        }

    return (
        <div className="item-names" key={item.id}>
        <div className="item-detail">
                <img src={item.image} alt={item.productName} className="item-image"/>
            <div className="des-detail">
                <p className="product-name">{item.productName}</p>
            </div>
        </div>
            <div className="item-quantity">
                {(item.quantity <= 1) ?
                    <button className="minus" onClick={handleMinusClick} disabled>-</button>
                    :
                    <button className="minus" onClick={handleMinusClick}>-</button>
                }
                <input type="text" min="1" max="10" value={item.quantity} className="item-amount" readOnly/>
                {(item.quantity >= 10) ?
                    <button className="plus" onClick={handleAddClick} disabled>+</button>
                    :
                    <button className="plus" onClick={handleAddClick}>+</button>
                }
            </div>
            <div className="price">
                <p className="show-price">${(item.quantity === 1) ? Number(item.price).toFixed(2).toString() : (item.quantity * Number(item.price)).toFixed(2).toString()}</p>
            </div>
            <div className="remove-btn">
                <button className="item-remove" onClick={handleRemoveClick}>X</button>
            </div>
        </div>
    )})

    return(
        <div className="cart-wrapper">
            <div className="item-name">
                <p className="first-title">My Cart</p>
                <p className="second-title">QUANTITY</p>
                <p className="third-title">Price</p>
                <p className="fourth-title">REMOVE</p>
            </div>
                {itemList} 
                <div className="row">
                    <div className="col s5 m6"></div>
                    <div className="col s4 m3 items4">
                        <p>Item Total:</p>
                    </div>
                    <div className="col s3 m2 items3">
                        <p>${cartTotal.toFixed(2).toString()} </p>
                    </div>
                    <div className="col m1"></div>
                </div> 
                <div className="row">
                    <div className="col s12 m12 l12"></div>
                </div>
                <div className="row">
                    <div className="col s3 m3 l3"></div>
                    <div className="col s6 m6 l6">
                        <div className="ipt-msg">Please using the following test credit card for payment</div>
                        <div className="ipt-msgg">4242 4242 4242 4242 - Exp Date: 04/26 - CVV: 426</div>
                    </div>
                    <div className="col s3 m3 l3"></div>
                </div>
                <div className="col s12 m12 l12"></div>
                <div className="row">
                    <div className="col s8 m9"></div>
                    <div className="col s3 m2">
                        <Pay total={cartTotal.toFixed(2).toString()}/>
                    </div>
                    <div className="col m1"></div>
                </div>
        </div> 
    )
}

const mapStateToProps = (state) => {
    return{
        cart: state.cart.Cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increase: (id) => dispatch({type: "INCREASE_QUANTITY", payload: id}),
        decrease: (id) => dispatch({type: "DECREASE_QUANTITY", payload: id}),
        removeItem: (id) => dispatch({type: "REMOVE_FROM_CART", payload: id})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
