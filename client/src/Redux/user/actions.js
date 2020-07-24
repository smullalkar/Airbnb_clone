import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILURE } from "./actionTypes";

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
            .get("/user/login", {
            })
            .then(res => {
                dispatch(getDataSuccess(res.data));
            })
            .catch(() => dispatch(getDataFailure()));
    };
}