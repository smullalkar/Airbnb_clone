import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILURE } from "./actionTypes";
import reducer from "../authentication/reducer";

const initState = {

}

const userReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_DATA_REQUEST:
            return {
                ...state
            }
        case GET_DATA_SUCCESS:
            return {
                ...state
            }
        case GET_DATA_FAILURE:
            return {
                ...state
            }
        default:
            return { ...state }
    }
}

export default userReducer;