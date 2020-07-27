import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE,
    GET_DATA_PAGEWISE_REQUEST,
    GET_DATA_PAGEWISE_SUCCESS,
    GET_DATA_PAGEWISE_FAILURE,
    GET_TYPE_OF_PLACE_REQUEST,
    GET_TYPE_OF_PLACE_SUCCESS,
    GET_TYPE_OF_PLACE_FAILURE,
    GET_AMENITIES_REQUEST,
    GET_AMENITIES_SUCCESS,
    GET_AMENITIES_FAILURE,
    GET_FACILITIES_REQUEST,
    GET_FACILITIES_SUCCESS,
    GET_FACILITIES_FAILURE,
    GET_PROPERTY_TYPE_REQUEST,
    GET_PROPERTY_TYPE_SUCCESS,
    GET_PROPERTY_TYPE_FAILURE,
    CLOSE_CANCELLATION_FLEXIBILITY
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
            .get("https://run.mocky.io/v3/90ce1a86-0ca8-45b1-b559-ce06fdfa102a", {
                params: payload
            })
            .then(res => dispatch(getDataSuccess(res.data)))
            .catch(() => dispatch(getDataFailure()));
    };
}

export const getTypeOfPlaceRequest = () => ({
    type: GET_TYPE_OF_PLACE_REQUEST
});

export const getTypeOfPlaceSuccess = payload => ({
    type: GET_TYPE_OF_PLACE_SUCCESS,
    payload
});

export const getTypeOfPlaceFailure = () => ({
    type: GET_TYPE_OF_PLACE_FAILURE
});

export const getTypeOfPlace = payload => {
    console.log(payload)
    return dispatch => {
        dispatch(getTypeOfPlaceRequest());
        return axios
            .get("https://run.mocky.io/v3/1732bf62-b3ab-4849-a7e1-741e2a0cfffd")
            .then(res => dispatch(getTypeOfPlaceSuccess(res.data)))
            .catch(() => dispatch(getTypeOfPlaceFailure()));
    };
}

export const getAmenitiesRequest = () => ({
    type: GET_AMENITIES_REQUEST
});

export const getAmenitiesSuccess = payload => ({
    type: GET_AMENITIES_SUCCESS,
    payload
});

export const getAmenitiesFailure = () => ({
    type: GET_AMENITIES_FAILURE
});

export const getAmenities = payload => {
    console.log(payload)
    return dispatch => {
        dispatch(getAmenitiesRequest());
        return axios
            .get("https://run.mocky.io/v3/4ed4d050-8bdc-4a5d-b0b2-5a29832a810f")
            .then(res => dispatch(getAmenitiesSuccess(res.data.data)))
            .catch(() => dispatch(getAmenitiesFailure()));
    };
}

export const getFacilitiesRequest = () => ({
    type: GET_FACILITIES_REQUEST
});

export const getFacilitiesSuccess = payload => ({
    type: GET_FACILITIES_SUCCESS,
    payload
});

export const getFacilitiesFailure = () => ({
    type: GET_FACILITIES_FAILURE
});

export const getFacilities = payload => {
    console.log(payload)
    return dispatch => {
        dispatch(getFacilitiesRequest());
        return axios
            .get("https://run.mocky.io/v3/c4d7e8e0-db36-4197-8780-bf2fe8606eb7")
            .then(res => dispatch(getFacilitiesSuccess(res.data.data)))
            .catch(() => dispatch(getFacilitiesFailure()));
    };
}

export const getPropertyTypeRequest = () => ({
    type: GET_PROPERTY_TYPE_REQUEST
});

export const getPropertyTypeSuccess = payload => ({
    type: GET_PROPERTY_TYPE_SUCCESS,
    payload
});

export const getPropertyTypeFailure = () => ({
    type: GET_PROPERTY_TYPE_FAILURE
});

export const getPropertyType = payload => {
    console.log(payload)
    return dispatch => {
        dispatch(getPropertyTypeRequest());
        return axios
            .get("https://run.mocky.io/v3/c4d7e8e0-db36-4197-8780-bf2fe8606eb7")
            .then(res => dispatch(getPropertyTypeSuccess(res.data.data)))
            .catch(() => dispatch(getPropertyTypeFailure()));
    };
}

//action to close cancellatiom flexibity popup
export const closeCancellationFlexibility = () => ({
    type: CLOSE_CANCELLATION_FLEXIBILITY
})