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
    TOKEN_VALIDATE_FAILURE
} from "../authentication/actionTypes";



const initState = {
    isAuth: false,
    isLoading: false,
    isValidating: false,
    token,
    email,
    isRegistering: false,
    registerSuccess: false,
    error: false,
    errorType: "",
    errorMessage: "",
  }