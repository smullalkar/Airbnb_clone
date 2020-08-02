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
    CLOSE_FORGET_PASSWORD,
    GET_USER_NAME
} from "./actionTypes";


function getUserInfo() {
    let token = localStorage.getItem("token");
    if (!token) {
        token = "";
    }
    return [token];
}

const [token] = getUserInfo();

const initState = {
    token,
    name: "",
    accessToken: "",
    provider: "",
    id: "",
    error: false,
    isLoading: true,
    isAuth: false,
    payload: "",
    user: [],
    isShowLoginModal: false,
    isShowRegisterModal: false,
    showSpinner: false,
    userName: "",
    forgetPassword: false
}

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_USER_NAME:
            return {
                userName: payload
            }
        case CLOSE_FORGET_PASSWORD:
            return {
                ...state,
                forgetPassword: !state.forgetPassword
            }
        case FACEBOOK_LOGIN_REQUEST:
            return {
                ...state,
                error: false,
                errorMessage: "",
                isLoading: true,
                isAuth: false
            }

        case FACEBOOK_LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                payload: payload,
                showSpinner: true

            }

        case FACEBOOK_LOGIN_FAILURE:
            return {
                ...state,
                isAuth: false,
                payload: payload,
                isLoading: false,
                error: true,
            }
        case GOOGLE_LOGIN_REQUEST:
            return {
                ...state,
                error: false,
                isAuth: false,
                isLoading: true
            }

        case GOOGLE_LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token);
            console.log(payload)
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                payload: payload,
                showSpinner: true
            }

        case GOOGLE_LOGIN_FAILURE:
            return {
                ...state,
                isAuth: false,
                payload: payload,
                isLoading: false,
                error: true,
            }
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                isAuth: false,
                error: false,
                errorMessage: "",
                isLoading: true
            }
        case LOGIN_USER_SUCCESS:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                payload: payload,
                showSpinner: true

            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isAuth: false,
                payload: payload,
                isLoading: false,
                error: true,
            }
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                error: false,
                errorMessage: "",
                isLoading: true,
                showSpinner: true,
                isAuth: false
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                payload: payload,
                showSpinner: false
            }
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                isAuth: false,
                payload: payload,
                isLoading: false,
                error: true,
            }

        case LOGOUT_USER:
            localStorage.setItem("token", "");
            return {
                ...state,
                isAuth: false,
                token: "",
                userName: ""
            };
        case CLOSE_LOGIN_MODAL:
            return {
                ...state,
                isShowLoginModal: !state.isShowLoginModal
            }
        case TOKEN_VALIDATE_REQUEST:
            return {
                ...state
            }
        case TOKEN_VALIDATE_SUCCESS:
            return {
                ...state,
                user: payload.data.data[0]
            }
        case TOKEN_VALIDATE_FAILURE:
            return {
                ...state
            }
        case CLOSE_REGISTER_MODAL:
            return {
                ...state,
                isShowRegisterModal: !state.isShowRegisterModal
            }
        default:
            return state
    }
}

export default reducer;