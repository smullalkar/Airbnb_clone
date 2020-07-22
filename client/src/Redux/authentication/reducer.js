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


function getUserInfo() {
    let token = localStorage.getItem("token");
    let email = localStorage.getItem("email");
    let userType = localStorage.getItem("role");
    if (!token || !email || !userType) {
        email = "";
        token = "";
        userType = "";
    }
    return [token, email, userType];
}

const [token, email, userType] = getUserInfo();
