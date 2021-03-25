const initState = {
    authSignUpError: null,
    authSignInError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case "USER_SIGNUP":
            console.log("user signup success!")
            return {
                ...state,
                authSignUpError: null
            }

        case "SIGNUP_ERROR":
            return{
                ...state,
                authSignUpError: action.payload
            }

        case "USER_SIGNIN":
            console.log("user login success!")
            return{
                ...state,
                authSignInError: null
            } 

        case "SIGNIN_ERROR":
            console.log(action.payload)
            return{
                ...state,
                authSignInError: action.payload
            }

        case "USER_SIGNOUT":
            console.log("user logout success!")
            return state
            
        default:
            return state
    }
}

export default authReducer;
