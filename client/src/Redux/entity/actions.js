import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE,
    SEND_BOOKING_REQUEST,
    SEND_BOOKING_SUCECSS,
    SEND_BOOKING_FAILURE,
    GET_BOOKED_DATES_REQUEST,
    GET_BOOKED_DATES_SUCCESS,
    GET_BOOKED_DATES_FAILURE,
    GET_RECOMENDDATION_REQUEST,
    GET_RECOMENDDATION_SUCCESS,
    GET_RECOMENDDATION_FAILURE,
    ADD_ADULTS,
    ADD_CHILDRENS,
    ADD_INFANTS,
    SUBTRACT_ADULTS,
    SUBTRACT_CHILDRENS,
    SUBTRACT_INFANTS,
    GET_HOST_INFO_REQUEST,
    GET_HOST_INFO_SUCCESS,
    GET_HOST_INFO_FAILURE,
    GET_SIMILAR_PROPERTIES_REQUEST,
    GET_SIMILAR_PROPERTIES_SUCCESS,
    GET_SIMILAR_PROPERTIES_FAILURE,
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
            .post("http://c1dfb3177721.ngrok.io/user/enitypage", payload) // post /user/entitypage
            .then(res => dispatch(getDataSuccess(res)))
            .catch(() => dispatch(getDataFailure()));
    };
}
// Actions to get Data from home page search End

//Actions to get the booked dates for a particular property Start
export const getBookedDatesRequest = () => ({
    type: GET_BOOKED_DATES_REQUEST
});

export const getBookedDatesSuccess = payload => ({
    type: GET_BOOKED_DATES_SUCCESS,
    payload
});

export const getBookedDatesFailure = () => ({
    type: GET_BOOKED_DATES_FAILURE
});

export const getBookedDates = payload => {
    console.log(payload)
    return dispatch => {
        dispatch(getBookedDatesRequest());
        return axios
            .post("http://c1dfb3177721.ngrok.io/user/addbooking", payload) // post /user/sendbooking
            .then(res => dispatch(getBookedDatesSuccess(res.data)))
            .catch(() => dispatch(getBookedDatesFailure()));
    };
}
//Actions to get the booked dates for a particular property End

//Actions to Send the booking request for a particular property Start
export const sendBookingRequest = () => ({
    type: SEND_BOOKING_REQUEST
});

export const sendBookingSuccess = payload => ({
    type: SEND_BOOKING_SUCECSS,
    payload
});

export const sendBookingFailure = () => ({
    type: SEND_BOOKING_FAILURE
});

export const sendBooking = payload => {
    console.log(payload)
    return dispatch => {
        dispatch(sendBookingRequest());
        return axios
            .post("https://run.mocky.io/v3/c4d7e8e0-db36-4197-8780-bf2fe8606eb7")
            .then(res => dispatch(sendBookingSuccess(res.data.data)))
            .catch(() => dispatch(sendBookingFailure()));
    };
}
//Actions to Send the booking request for a particular property End

//Actions to get the recommendation to the user Start
export const getRecommendationRequest = () => ({
    type: GET_RECOMENDDATION_REQUEST
});

export const getRecommendationSuccess = payload => ({
    type: GET_RECOMENDDATION_SUCCESS,
    payload
});

export const getRecommendationFailure = () => ({
    type: GET_RECOMENDDATION_FAILURE
});

export const getRecommendation = payload => {
    console.log(payload)
    return dispatch => {
        dispatch(getRecommendationRequest());
        return axios
            .post("http://c1dfb3177721.ngrok.io/user/recommendation")
            .then(res => dispatch(getRecommendationSuccess(res.data)))
            .catch(() => dispatch(getRecommendationFailure()));
    };
}
//Actions to get the recommendation to the user End


export const getHostInfoRequest = () => ({
    type: GET_HOST_INFO_REQUEST
});

export const getHostInfoSuccess = payload => ({
    type: GET_HOST_INFO_SUCCESS,
    payload
});

export const getHostInfoFailure = () => ({
    type: GET_HOST_INFO_FAILURE
});

export const getHostInfo = payload => {
    console.log(payload)
    return dispatch => {
        dispatch(getHostInfoRequest());
        return axios
            .post("https://run.mocky.io/v3/9d718346-0027-4afa-a824-e6ef7664d8ec", payload)
            .then(res => dispatch(getHostInfoSuccess(res.data)))
            .catch(() => dispatch(getHostInfoFailure()));
    };
}

export const getSimilarPropertiesRequest = () => ({
    type: GET_SIMILAR_PROPERTIES_REQUEST
});

export const getSimilarPropertiesSuccess = payload => ({
    type: GET_SIMILAR_PROPERTIES_SUCCESS,
    payload
});

export const getSimilarPropertiesFailure = () => ({
    type: GET_SIMILAR_PROPERTIES_FAILURE
});

export const getSimilarProperties = payload => {
    console.log(payload)
    return dispatch => {
        dispatch(getSimilarPropertiesRequest());
        return axios
            .post("https://run.mocky.io/v3/9d718346-0027-4afa-a824-e6ef7664d8ec", payload)
            .then(res => dispatch(getSimilarPropertiesSuccess(res.data)))
            .catch(() => dispatch(getSimilarPropertiesFailure()));
    };
}


export const addAdults = () => ({
    type: ADD_ADULTS
})

export const addChildrens = () => ({
    type: ADD_CHILDRENS
})

export const addInfants = () => ({
    type: ADD_INFANTS
})

export const subtractAdults = () => ({
    type: SUBTRACT_ADULTS
})

export const subtractChildrens = () => ({
    type: SUBTRACT_CHILDRENS
})

export const subtractInfants = () => ({
    type: SUBTRACT_INFANTS
})