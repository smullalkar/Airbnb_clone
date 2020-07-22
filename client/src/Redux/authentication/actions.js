import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER_REQUEST,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILURE,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE
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
            .catch(() => dispatch(loginUserFail()));
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

export const registerUserFail = () => ({
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
            .catch(() => dispatch(registerUserFail()));
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

export const logoutUserFail = () => ({
    type: LOGOUT_USER_FAILURE
});

//Logout user end
