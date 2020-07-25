import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILURE } from "./actionTypes";

const initState = {
    data: [],
    isLodaing: false
}

const userReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_DATA_REQUEST:
            return {
                ...state,
                isLodaing: true
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                data: [...state.data, payload],
                isLodaing: false
            }
        case GET_DATA_FAILURE:
            return {
                ...state,
                isLodaing: false
            }
        default:
            return { ...state }
    }
}

export default userReducer;