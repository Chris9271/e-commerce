import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import SignUp from './SignUp';
import {userSignIn, googleSignIn, forgetPassword} from './authAction';
import Footer from '../../Header/Footer';
import './SignIn.css';

const SignIn = ({status, userLogin, auth, googleLogin, resetPassword}) => {
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    });
    // {email} - desturcture, originally should use loginInfo.email to access
    const {email, password} = loginInfo;

    const handleChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.className]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        userLogin(loginInfo);
        setLoginInfo({
            email: "",
            password: ""
        })
    }


    if(status.auth.uid) return <Redirect to="/" />

    return (
    <div className="outside-box">
        <div className="join-wrapper">
            <div className="row container left-row">
                <h4>SIGN IN</h4>
                <form onSubmit={handleSubmit}>
                <div className="input-field col s12">
                    <input type="text" className="email" value={email} onChange={handleChange} required/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s12">
                    <input type="password" className="password" value={password} onChange={handleChange} required/>
                    <label htmlFor="password">Password</label>
                    {(auth) ? <span className="helper-text red-text" data-wrong={auth}>Email or Password is invalid</span> : null}
                </div>
                <p className="blue-text center forget-pwd" onClick={()=>resetPassword(email)}>Forget Your Password?</p>
                <div className="btn-group">
                    <button className="signin-btn" type="submit">SIGN IN</button>
                    <button className="google-btn" onClick={(e)=>googleLogin(e.preventDefault())}>SIGN WITH GOOGLE</button>
                </div>
                </form>
            </div>
            <SignUp/>
        </div>
        <Footer/>
    </div>
    )
}

const mapStateToProps = (state) => {
    return{
        status: state.firebase,
        auth: state.auth.authSignInError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        userLogin: (loginInfo) => dispatch(userSignIn(loginInfo)),
        googleLogin: () => dispatch(googleSignIn()),
        resetPassword: (email) => dispatch(forgetPassword(email))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
