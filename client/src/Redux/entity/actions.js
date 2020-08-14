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
import axios from "../../Utils/axiosInterceptor";


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
            .post("user/entitypage", payload) // post /user/entitypage
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
    console.log("payload booked dates", payload)
    return dispatch => {
        dispatch(getBookedDatesRequest());
        return axios // post /user/sendbooking
            .post("/user/sendbooking", payload)
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
    console.log("normal recommendation : ", payload)
    return dispatch => {
        dispatch(getRecommendationRequest());
        return axios //user/recommendation
            .get("user/recommendation_popularity", {
                params: payload
            })
            .then(res => dispatch(getRecommendationSuccess(res.data)))
            .catch(() => dispatch(getRecommendationFailure()));
    };
}
//Actions to get the recommendation to the user End

//Actions to get the Host information
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
    return dispatch => {
        dispatch(getHostInfoRequest());
        return axios
            .post("owner/ownerdetails", payload)
            .then(res => dispatch(getHostInfoSuccess(res.data)))
            .catch(() => dispatch(getHostInfoFailure()));
    };
}


// Action to get similar properties which user is looking
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
    console.log("This is for similar", payload)
    return dispatch => {
        dispatch(getSimilarPropertiesRequest());
        return axios // /user/recommendation POST
            .get("user/recommendation", {
                params : payload
            })
            .then(res => dispatch(getSimilarPropertiesSuccess(res.data)))
            .catch(() => dispatch(getSimilarPropertiesFailure()));
    };
}

// Action to get user reviews on which the property that currnetly user is watching
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
    return dispatch => {
        dispatch(getReviewRequest());
        return axios // user/reviews POST
            .post("user/reviews", payload)
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