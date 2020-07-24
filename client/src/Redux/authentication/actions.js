import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER_REQUEST,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILURE,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    TOKEN_VALIDATE_REQUEST,
    TOKEN_VALIDATE_SUCCESS,
    TOKEN_VALIDATE_FAILURE,
    FACEBOOK_LOGIN_REQUEST,
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAILURE,
    GOOGLE_LOGIN_REQUEST,
    GOOGLE_LOGIN_SUCCESS,
    GOOGLE_LOGIN_FAILURE,
    CLOSE_LOGIN_MODAL,
    CLOSE_REGISTER_MODAL
} from "../authentication/actionTypes";

import axios from "../../Utils/axiosInterceptor";


//Facebook login Request start
export const facebookLoginRequest = () => ({
    type: FACEBOOK_LOGIN_REQUEST
})

export const facebookLoginSuccess = payload => ({
    type: FACEBOOK_LOGIN_FAILURE,
    payload
})

export const facebookLoginFailure = () => ({
    type: FACEBOOK_LOGIN_FAILURE,
})

export const facebookLogin = payload => {
    const [firstname, lastname] = payload.name.split(" ")
    console.log(firstname, "\n" + lastname, "\n" + payload.email, "\n" + payload.accessToken, "\n" + payload.graphDomain, "\n" + payload.id)
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
    console.log(payload)
    const [firstname, lastname] = payload.profileObj.name.split(" ")
    console.log(firstname, "\n" + lastname, "\n" + payload.profileObj.email, "\n" + payload.accessToken + "\n", payload.wc.idpId, payload.googleId)
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
    console.log(payload)
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
    console.log(payload)
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
export const logoutUserRequest = () => ({
    type: LOGOUT_USER_REQUEST
});

export const logoutUserSuccess = payload => ({
    type: LOGOUT_USER_SUCCESS,
    payload
});

export const logoutUserFailure = () => ({
    type: LOGOUT_USER_FAILURE
});
//Logout user request end


// close the modal
export const closeLoginModal = () => ({
    type: CLOSE_LOGIN_MODAL
})

//close registration modal
export const closeRegisterModal = () => ({
    type: CLOSE_REGISTER_MODAL
})