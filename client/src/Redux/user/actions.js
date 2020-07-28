import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE,
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
    return dispatch => {
        dispatch(getDataRequest());
        return axios
            .get("http://c1dfb3177721.ngrok.io/user/searchresults", {
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
    return dispatch => {
        dispatch(getTypeOfPlaceRequest());
        return axios
            .get("http://c1dfb3177721.ngrok.io/user/categories")
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
    return dispatch => {
        dispatch(getAmenitiesRequest());
        return axios
            .get("http://c1dfb3177721.ngrok.io/user/amenities")
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
    return dispatch => {
        dispatch(getFacilitiesRequest());
        return axios
            .get("http://c1dfb3177721.ngrok.io/user/facilities")
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
    return dispatch => {
        dispatch(getPropertyTypeRequest());
        return axios
            .get("http://c1dfb3177721.ngrok.io/user/propertytype")
            .then(res => dispatch(getPropertyTypeSuccess(res.data.data)))
            .catch(() => dispatch(getPropertyTypeFailure()));
    };
}

//action to close cancellatiom flexibity popup
export const closeCancellationFlexibility = () => ({
    type: CLOSE_CANCELLATION_FLEXIBILITY
})
