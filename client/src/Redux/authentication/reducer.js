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
    FACEBOOK_LOGIN_REQUEST,
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAILURE,
    GOOGLE_LOGIN_REQUEST,
    GOOGLE_LOGIN_SUCCESS,
    GOOGLE_LOGIN_FAILURE,
    CLOSE_LOGIN_MODAL,
    CLOSE_REGISTER_MODAL
} from "./actionTypes";


function getUserInfo() {
    let token = localStorage.getItem("token");
    if (!token ) {
        token = "";
    }
    return [token ];
}

const [token] = getUserInfo();

const initState = {
    token,
    name: "",
    accessToken: "",
    provider: "",
    id: "",
    error: false,
    errorMessage: "",
    isLoading: true,
    isAuth: false,
    payload: "",
    isShowLoginModal: false,
    isShowRegisterModal: false
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
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                error: false,
                errorMessage: "",
                isLoading: true
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                payload: payload
            }
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                isAuth: false,
                payload: payload,
                isLoading: false,
                error: true,
                errorMessage: "something went wrong"
            }

        case LOGOUT_USER_REQUEST:
            return {
                ...state,
                error: false,
                errorType: "",
                errorMessage: ""
            };
        case LOGOUT_USER_SUCCESS:
            localStorage.setItem("token", "");
            return {
                ...state,
                isAuth: false,
                token: "",
                userType: "",
            };
        case LOGOUT_USER_FAILURE:
            return {
                ...state,
                error: true,
                errorType: "logout",
                errorMessage: "logout failed"
            };
        case CLOSE_LOGIN_MODAL:
            console.log("invoked")
            return {
                ...state,
                isShowLoginModal: !state.isShowLoginModal
            }
            case CLOSE_REGISTER_MODAL :
                return{
                    ...state,
                    isShowRegisterModal : !state.isShowRegisterModal
                }
        default:
            return state
    }
}

export default reducer;