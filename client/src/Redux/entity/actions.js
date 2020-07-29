import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE,
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
    CALCULATE_TOTAL_PRICE,
    GET_REVEIW_REQUEST,
    GET_REVEIW_SUCCESS,
    GET_REVEIW_FAILURE
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
        return axios ///user/entitypage post method
            .get("https://run.mocky.io/v3/42092674-f6de-4bcb-bda6-c2c0bcd0293d", payload) // post /user/entitypage
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
            .get("https://run.mocky.io/v3/1b380005-0dfb-4232-b498-b13da07ffcf6", payload) // post /user/sendbooking
            .then(res => dispatch(getBookedDatesSuccess(res.data)))
            .catch(() => dispatch(getBookedDatesFailure()));
    };
}
//Actions to get the booked dates for a particular property End


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
            .post("https://run.mocky.io/v3/4822554f-821a-4d2e-bf51-e6a2fbb4ab2f", {
                params: payload
            })
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
            .post("http://1a227c043c3e.ngrok.io/owner/ownerdetails", payload)
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
            .get("https://run.mocky.io/v3/4822554f-821a-4d2e-bf51-e6a2fbb4ab2f", payload)
            .then(res => dispatch(getSimilarPropertiesSuccess(res.data)))
            .catch(() => dispatch(getSimilarPropertiesFailure()));
    };
}


export const getReviewRequest = () => ({
    type: GET_REVEIW_REQUEST
});

export const getReviewSuccess = payload => ({
    type: GET_REVEIW_SUCCESS,
    payload
});

export const getReviewFailure = () => ({
    type: GET_REVEIW_FAILURE
});

export const getReview = payload => {
    console.log(payload)
    return dispatch => {
        dispatch(getReviewRequest());
        return axios
            .get("https://run.mocky.io/v3/1fb8ce5d-3229-4bc1-b910-ae06b461edfa", payload)
            .then(res => dispatch(getReviewSuccess(res.data)))
            .catch(() => dispatch(getReviewFailure()));
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

export const calculateTotalPrice = (payload) => ({
    type: CALCULATE_TOTAL_PRICE,
    payload
})