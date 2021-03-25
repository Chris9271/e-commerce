//Action creator, can access firebase and firestore API here
//使用thunk 所以這邊可以做異步的操作 -> dispatch. getState
//thunk使用getFirebase. getFirestore為自定義的參數 -> getFirebase. getFirestore
export const userSignUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res) => {
            console.log(res)
                return firestore.collection('users').doc(res.user.uid).set({
                    username: newUser.username,
                    email: newUser.email,
                    password: newUser.password 
                })
            }).then(()=>{
                dispatch({type:"USER_SIGNUP"})
            })
            .catch(err => {
                dispatch({type:"SIGNUP_ERROR", payload: err})
            })
    }
}

export const userSignIn = (userInfo) => {
    return (dispatch, getState, {getFirebase} ) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            userInfo.email,
            userInfo.password
        ).then(()=>{
            dispatch({type: "USER_SIGNIN"})
        }).catch(err => {
            dispatch({type: "SIGNIN_ERROR", payload: err})
        })
    }
}

export const userSignOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut()
        .then(()=>{
            dispatch({type: "USER_SIGNOUT"})
        })
    }
}

export const googleSignIn = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
}


export const forgetPassword = (userEmail) => {
    return(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().sendPasswordResetEmail(userEmail)
        .then(() => {
            alert('Reset password email is send')
        })
        .catch((err) => {
            console.log(err)
            alert('This Email Address is not match our record')
        })
    }
}