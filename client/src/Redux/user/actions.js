import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE,
    GET_DATA_PAGEWISE_REQUEST,
    GET_DATA_PAGEWISE_SUCCESS,
    GET_DATA_PAGEWISE_FAILURE
} from "./actionTypes";
import axios from "axios";


// Actions to get Data from home page search start
export const getDataRequest = () => ({
    type: GET_DATA_REQUEST
});

export const getDataSuccess = payload => ({
    type: GET_DATA_SUCCESS,
    payload
});

export const getDataFailure = () => ({
    type: GET_DATA_FAILURE
});

export const getData = payload => {
    console.log(payload)
    return dispatch => {
        dispatch(getDataRequest());
        return axios
            .get("/user/searchresults", payload)
            .then(res => {
                dispatch(getDataSuccess(res.data));
            })
            .catch(() => dispatch(getDataFailure()));
    };
}
// Actions to get Data from home page search end

// Actions to get Data pagewise(pagination) start
// export const getDataRequest = () => ({
//     type: GET_DATA_REQUEST
// });

// export const getDataSuccess = payload => ({
//     type: GET_DATA_SUCCESS,
//     payload
// });

// export const getDataFailure = () => ({
//     type: GET_DATA_FAILURE
// });

// export const getData = payload => {
//     console.log(payload)
//     return dispatch => {
//         dispatch(getDataRequest());
//         return axios
//             .get("/user/searchresults", payload)
//             .then(res => {
//                 dispatch(getDataSuccess(res.data));
//             })
//             .catch(() => dispatch(getDataFailure()));
//     };
// }
// Actions to get Data pagewise(pagination) end

