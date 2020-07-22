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
} from "../authentication/actionTypes";

import axios from "../../Utils/axiosInterceptor";


//Login request start
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
            .post("/login", {
                email: payload.email,
                password: payload.password
            })
            .then(res => {
                dispatch(loginUserSuccess(res.data));
            })
            .catch(() => dispatch(loginUserFailure()));
    };
};

loginUser({ email: "test", password: "test" });
//Login request end

// Register user start

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
            .post("/signup", {
                email: payload.email,
                name: payload.name,
                password: payload.password
            })
            .then(res => {
                dispatch(registerUserSuccess(res.data));
            })
            .catch(() => dispatch(registerUserFailure()));
    };
};
// Register user end

//Logout user start
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

//Logout user end


//Token validation start

export const tokenValidateRequest = () => ({
    type: TOKEN_VALIDATE_REQUEST
});

export const tokenValidateSuccess = payload => ({
    type: TOKEN_VALIDATE_SUCCESS,
    payload
});

export const tokenValidateFailure = () => ({
    type: TOKEN_VALIDATE_FAILURE
});

export const tokenValidateUser = payload => {
    return dispatch => {
        dispatch(tokenValidateRequest());
        return axios
            .get("/validate", {
                headers: {
                    Authorization: payload
                }
            })
            .then(res =>
                res.data.success
                    ? dispatch(tokenValidateSuccess(res))
                    : dispatch(tokenValidateFailure())
            )
            .catch(() => dispatch(tokenValidateFailure()));
    };
};

  //Token validation end