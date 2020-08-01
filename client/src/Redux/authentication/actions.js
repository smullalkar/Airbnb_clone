import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    FACEBOOK_LOGIN_REQUEST,
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAILURE,
    GOOGLE_LOGIN_REQUEST,
    GOOGLE_LOGIN_SUCCESS,
    GOOGLE_LOGIN_FAILURE,
    CLOSE_LOGIN_MODAL,
    CLOSE_REGISTER_MODAL,
    TOKEN_VALIDATE_REQUEST,
    TOKEN_VALIDATE_SUCCESS,
    TOKEN_VALIDATE_FAILURE,
    CLOSE_FORGET_PASSWORD
} from "../authentication/actionTypes";

import axios from "../../Utils/axiosInterceptor";


//Facebook login Request start
export const facebookLoginRequest = () => ({
    type: FACEBOOK_LOGIN_REQUEST
})

export const facebookLoginSuccess = payload => ({
    type: FACEBOOK_LOGIN_SUCCESS,
    payload
})

export const facebookLoginFailure = () => ({
    type: FACEBOOK_LOGIN_FAILURE,
})

export const facebookLogin = payload => {
    const [firstname, lastname] = payload.name.split(" ")
    return dispatch => {
        dispatch(facebookLoginRequest());
        return axios
            .post("user/oauthlogin", {
                firstname: firstname,
                lastname: lastname,
                email: payload.email,
                access_token: payload.accessToken,
                provider: payload.graphDomain,
                provider_id: payload.id
            })
            .then(res => {
                dispatch(facebookLoginSuccess(res.data));
            })
            .catch(() => dispatch(facebookLoginFailure()));
    };
}
//Facebook login Request End


//Google login Request start
export const googleLoginRequest = () => ({
    type: GOOGLE_LOGIN_REQUEST
})

export const googleLoginSuccess = payload => ({
    type: GOOGLE_LOGIN_SUCCESS,
    payload
})

export const googleLoginFailure = () => ({
    type: GOOGLE_LOGIN_FAILURE,

})

export const googleLogin = payload => {
    const [firstname, lastname] = payload.profileObj.name.split(" ")
    return dispatch => {
        dispatch(googleLoginRequest());
        return axios
            .post("user/oauthlogin", {
                firstname: firstname,
                lastname: lastname,
                email: payload.profileObj.email,
                access_token: payload.accessToken,
                provider: payload.wc.idpId,
                provider_id: payload.googleId
            })
            .then(res => {
                dispatch(googleLoginSuccess(res.data));
            })
            .catch(() => dispatch(googleLoginFailure()));
    };
}
//Google login Request End


//Login User Request start
export const loginUserRequest = () => ({
    type: LOGIN_USER_REQUEST
});

export const loginUserSuccess = payload => ({
    type: LOGIN_USER_SUCCESS,
    payload
});

export const loginUserFailure = () => ({
    type: LOGIN_USER_FAILURE
});

export const loginUser = payload => {
    return dispatch => {
        dispatch(loginUserRequest());
        return axios
            .post("/user/login", {
                email: payload.email,
                password: payload.password,
            })
            .then(res => {
                dispatch(loginUserSuccess(res.data));
            })
            .catch(() => dispatch(loginUserFailure()));
    };
}
//Login User Request End


//Register user request start
export const registerUserRequest = () => ({
    type: REGISTER_USER_REQUEST
});

export const registerUserSuccess = payload => ({
    type: REGISTER_USER_SUCCESS,
    payload
});

export const registerUserFailure = () => ({
    type: REGISTER_USER_FAILURE
});

export const registerUser = payload => {
    return dispatch => {
        dispatch(registerUserRequest());
        return axios
            .post("user/register", {
                email: payload.email,
                password: payload.password,
                phone: payload.phone,
                firstname: payload.firstname,
                lastname: payload.lastname,
                dob: payload.dob
            })
            .then(res => {
                dispatch(registerUserSuccess(res.data));
            })
            .catch(() => dispatch(registerUserFailure()));
    };
}
//Register user request End


//Logout user request start
// export const logoutUserRequest = () => ({
//     type: LOGOUT_USER_REQUEST
// });

export const logoutUser = () => ({
    type: LOGOUT_USER,
});

// export const logoutUserFailure = () => ({
//     type: LOGOUT_USER_FAILURE
// });
//Logout user request end


// close the modal
export const closeLoginModal = () => ({
    type: CLOSE_LOGIN_MODAL
})


//close registration modal
export const closeRegisterModal = () => ({
    type: CLOSE_REGISTER_MODAL
})

// For the token Validation
export const tokenValidateRequest = () => ({
    type: TOKEN_VALIDATE_REQUEST
});

export const tokenValidateSuccess = payload => ({
    type: TOKEN_VALIDATE_SUCCESS,
    payload
});

export const tokenValidateFail = () => ({
    type: TOKEN_VALIDATE_FAILURE
});

export const tokenValidateUser = payload => {
    return dispatch => {
        dispatch(tokenValidateRequest());
        return axios
            .post("user/userdetails", { token: payload })
            .then(res => dispatch(tokenValidateSuccess(res.data))
            )
            .catch(() => dispatch(tokenValidateFail()));
    };
};


export const closeForgetPassword =()=>({
    type:CLOSE_FORGET_PASSWORD
})