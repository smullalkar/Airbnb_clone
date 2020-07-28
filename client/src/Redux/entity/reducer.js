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

const initState = {
    data: [],
    isLoading: false,
    bookedDates: [],
    childrens: 0,
    adults: 0,
    infants: 0,
    hostInfo: [],
    recommendation: [],
    similarProperty: []
}

const entityReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_DATA_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: [...state.data, payload]
            }
        case GET_DATA_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case GET_BOOKED_DATES_REQUEST:
            return {
                ...state
            }
        case GET_BOOKED_DATES_SUCCESS:
            return {
                ...state,
                bookedDates: [...state.bookedDates, payload]
            }
        case GET_BOOKED_DATES_FAILURE:
            return {
                ...state
            }
        case SEND_BOOKING_REQUEST:
            return {
                ...state
            }
        case SEND_BOOKING_SUCECSS:
            return {
                ...state
            }
        case SEND_BOOKING_FAILURE:
            return {
                ...state
            }
        case GET_RECOMENDDATION_REQUEST:
            return {
                ...state
            }
        case GET_RECOMENDDATION_SUCCESS:
            return {
                ...state,
                recommendation: payload
            }
        case GET_RECOMENDDATION_FAILURE:
            return {
                ...state
            }
        case ADD_INFANTS:
            return {
                ...state,
                infants: state.infants + 1
            }
        case SUBTRACT_INFANTS:
            return {
                ...state,
                infants: state.infants - 1
            }
        case ADD_CHILDRENS:
            return {
                ...state,
                childrens: state.childrens + 1
            }
        case SUBTRACT_CHILDRENS:
            return {
                ...state,
                childrens: state.childrens - 1

            }
        case ADD_ADULTS:
            return {
                ...state,
                adults: state.adults + 1

            }
        case SUBTRACT_ADULTS:
            return {
                ...state,
                adults: state.adults - 1

            }
        case GET_HOST_INFO_REQUEST:
            return {
                ...state
            }
        case GET_HOST_INFO_SUCCESS:
            return {
                ...state,
                hostInfo: payload
            }
        case GET_HOST_INFO_FAILURE:
            return {
                ...state
            }
        case GET_SIMILAR_PROPERTIES_REQUEST:
            return {
                ...state
            }
        case GET_SIMILAR_PROPERTIES_SUCCESS:
            return {
                ...state,
                similarProperty: payload
            }
        case GET_SIMILAR_PROPERTIES_FAILURE:
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}

export default entityReducer