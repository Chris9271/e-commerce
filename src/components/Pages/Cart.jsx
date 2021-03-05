import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import './Cart.css';

const Cart = ({cart, increase, decrease, removeItem}) => {

    const [cartTotal, setCartTotal] = useState(0);
    const [quantity, setQuantity] = useState();

    const total = () => {
        let totalPrice = 0;
        for(let i = 0; i < cart.length; i++){
            if(cart.length > 0){
                totalPrice = totalPrice + Number(cart[i].price);
                    if(cart.length > 0 && cart[i].quantity > 1){
                        totalPrice = totalPrice + Number(cart[i].price * quantity);
                    }
                // console.log(Number(cart[i].price))
                // console.log(cart[i])
            }
            setCartTotal(totalPrice);
        }
    }

        useEffect(() => {
            total();
        }, [cart])
    

    if(cart.length === 0){
        return(
            <div className="row container center">
                <h5>You currently have no items in your shopping cart.</h5>
            </div>
        )
    }

    let itemList = cart.map(item => {

        const handleMinusClick = (e) => {
            e.preventDefault();
            decrease(item.id);
            setQuantity(item.quantity)
            console.log(quantity)
        }

        const handleAddClick = (e) => {
            e.preventDefault();
            increase(item.id);
            setQuantity(item.quantity)
            console.log(quantity)
        }
    
        const handleRemoveClick = (e) => {
            e.preventDefault();
            removeItem(item.id);
        }

    return (
        <div className="row container item-names" key={item.id}>
            <div className="col s12 m5 item-detail">
                <img src={item.image} alt={item.productName} className="item-image"/>
                <div className="des-detail">
                    <p className="product-name">{item.productName}</p>
                    <label>Choose size</label>
                    <select className="browser-default button-option">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
            </div>
            <div className="col m3 item-quantity">
                {(item.quantity <= 1) ?
                    <button className="minus" onClick={handleMinusClick} disabled>-</button>
                    :
                    <button className="minus" onClick={handleMinusClick}>-</button>
                }
                <input type="text" min="1" max="10" value={item.quantity} className="item-amount"/>
                {(item.quantity >= 10) ?
                    <button className="plus" onClick={handleAddClick} disabled>+</button>
                    :
                    <button className="plus" onClick={handleAddClick}>+</button>
                }
            </div>
            <div className="col m1"></div>
            <div className="col m1 show-price">
                <p>${item.totalPrice.toFixed(2).toString()}</p>
            </div>
            <div className="col m1"></div>
            <div className="col m1">
                <button className="item-remove" onClick={handleRemoveClick}>X</button>
            </div>
        </div>
    )})

    return(
        <div className="cart-wrapper">
            <div className="row container item-name">
                <div className="col s12 m5">
                    <p>My Cart</p>
                </div>
                <div className="col m1">
                    <p className="title">QUANTITY</p>
                </div>
                <div className="col m3"></div>
                <div className="col m1">
                    <p className="title">Price</p>
                </div>
                <div className="col m1"></div>
                <div className="col m1">
                    <p className="title">REMOVE</p>
                </div>  
            </div>
                {itemList} 
                <div className="row">
                    <div className="col s7"></div>
                    <div className="col s2">
                        <p>Item Total:</p>
                    </div>
                    <div className="col s1">
                    {/* Should fix - if each item quantity > 1, total price won't change */}
                        <p>${cartTotal.toFixed(2).toString()} </p>
                    </div>
                    <div className="col s1"></div>
                </div> 
        </div> 
    )
}

const mapStateToProps = (state) => {
    return{
        cart: state.Cart
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
