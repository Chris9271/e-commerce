import React from 'react';
import {connect} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

const Pay = ({clearCart, total}) => {

    const publishKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

    const Total = total * 100;
    // Token return client info like ip, card detail, email... etc or return error
    const Token = (token) => {
        console.log(token)
        alert("Payment successful!!")
        clearCart();
    }

    return(
        <StripeCheckout
            name="LOBINTON Ltd." // the pop-in header title
            description={`The total is ${total}`} // the pop-in header subtitle
            image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
            // ComponentClass="div"
            label="Pay Now" // text inside the Stripe button
            panelLabel="Pay" // prepended to the amount at the bottom in pay button (in credit card detail)
            amount={Total} // cents
            currency="CAD"
            stripeKey={publishKey}
            // locale="zh"
            // email="info@vidhub.co"
            // Note: Enabling either address option will give the user the ability to
            // fill out both. Addresses are sent as a second parameter in the token callback.
            shippingAddress
            billingAddress
            // Note: enabling both zipCode checks and billing or shipping address will
            // cause zipCheck to be pulled from billing address (set to shipping if none provided).
            // zipCode
            // allowRememberMe // "Remember Me" option (default true)
            token={Token} // submit callback
            // opened={onOpened} // called when the checkout popin is opened (no IE6/7)
            // closed={onClosed} // called when the checkout popin is closed (no IE6/7)
            // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
            // you are using multiple stripe keys
            // reconfigureOnUpdate={false}
            // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
            // useful if you're using React-Tap-Event-Plugin
            // triggerEvent="onTouchTap"
            >
            {/* <button className="btn btn-primary">
            Use your own child component, which gets wrapped in whatever
            component you pass into as "ComponentClass" (defaults to span)
            </button> */}
        </StripeCheckout>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        clearCart: () => dispatch({type: "Cart_Empty", payload: []})
    }
}

export default connect(null, mapDispatchToProps)(Pay);

