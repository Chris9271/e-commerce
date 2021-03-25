import React, {useState} from 'react';
import {connect} from 'react-redux';
import {userSignUp} from './authAction';
// import './SignIn.css';

const SignUp = ({createUser, auth}) => {
    const [newUserInfo, setNewUserInfo] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: ""
    })

    const {password, confirmpassword} = newUserInfo;

    const handleChange = (e) => {
        setNewUserInfo({
            ...newUserInfo,
            [e.target.className]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== confirmpassword){
            alert("Confirm Password not match")
        }else{
            createUser(newUserInfo);
        }
        console.log(newUserInfo);
    }

    return (
            <div className="row container right-row">
                <h4>SIGN UP</h4>
                <form onSubmit={handleSubmit}>
                <div className="input-field col s12">
                    <input type="text" className="username" onChange={handleChange} required/>
                    <label htmlFor="username">Username</label>
                </div>
                <div className="input-field col s12">
                    <input type="text" className="email" onChange={handleChange} required/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s12">
                    <input type="password" className="password" onChange={handleChange} required/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="input-field col s12">
                    <input type="password" className="confirmpassword" onChange={handleChange} required/>
                    <label htmlFor="confirmpassword">ConfirmPassword</label>
                    {(auth) ? <span className="helper-text red-text" data-wrong={auth}>Email or Password invalid</span> : null}
                </div>
                <button className="signup-btn" type="submit">SIGN UP</button>
                </form>
            </div>
    )
}

const mapStateToProps = (state) => {
    return{
        auth: state.auth.authSignUpError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createUser: (newUser) => dispatch(userSignUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
