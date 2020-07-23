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
} from "./actionTypes";



const initState = {
    name: "",
    email: "",
    accessToken: "",
    provider: "",
    id: "",
    error: false,
    errorMessage: "",
    isLoading: true,
    isAuth: false
}

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case FACEBOOK_LOGIN_REQUEST:
            return {
                ...state,
                error: false,
                errorMessage: "",
                isLoading: true
            }

        case FACEBOOK_LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                payload: payload
            }

        case FACEBOOK_LOGIN_FAILURE:
            return {
                ...state,
                isAuth: false,
                payload: payload,
                isLoading: false,
                error: true,
                errorMessage: "something went wrong"
            }
        case GOOGLE_LOGIN_REQUEST:
            return {
                ...state,
                error: false,
                errorMessage: "",
                isLoading: true
            }

        case GOOGLE_LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                payload: payload
            }

        case GOOGLE_LOGIN_FAILURE:
            return {
                ...state,
                isAuth: false,
                payload: payload,
                isLoading: false,
                error: true,
                errorMessage: "something went wrong"
            }
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                error: false,
                errorMessage: "",
                isLoading: true
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                payload: payload
            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isAuth: false,
                payload: payload,
                isLoading: false,
                error: true,
                errorMessage: "something went wrong"
            }
        default:
            return state
    }
}

export default reducer;