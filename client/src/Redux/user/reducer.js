import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE,
    CLOSE_CANCELLATION_FLEXIBILITY,
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
    SHOW_MORE_FILTERS
} from "./actionTypes";

const initState = {
    data: [],
    isLoading: true,
    showCancellationFlexibility: false,
    typeOfPlaces: [],
    amenities: [],
    facilities: [],
    propertyTypes: [],
    showMoreFilter: false
}

const userReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_DATA_REQUEST:
            console.log(payload)
            return {
                ...state,
                isLodaing: true
            }
        case GET_DATA_SUCCESS:
            console.log("payload ", payload.data)
            return {
                ...state,
                data: payload.data,
                isLoading: false
            }
        case GET_DATA_FAILURE:
            console.log("failure ", payload)
            return {
                ...state,
                isLodaing: false
            }
        case GET_TYPE_OF_PLACE_REQUEST:
            return {
                ...state
            }
        case GET_TYPE_OF_PLACE_SUCCESS:
            return {
                ...state,
                typeOfPlaces: payload
            }
        case GET_TYPE_OF_PLACE_FAILURE:
            return {
                ...state
            }
        case GET_AMENITIES_REQUEST:
            return {
                ...state
            }
        case GET_AMENITIES_SUCCESS:
            return {
                ...state,
                amenities: payload.filter((item, index) => index > 30 && index < 50)
            }
        case GET_AMENITIES_FAILURE:
            return {
                ...state
            }
        case GET_FACILITIES_REQUEST:
            return {
                ...state
            }
        case GET_FACILITIES_SUCCESS:
            return {
                ...state,
                facilities: payload
            }
        case GET_FACILITIES_FAILURE:
            return {
                ...state
            }
        case GET_PROPERTY_TYPE_REQUEST:
            return {
                ...state
            }
        case GET_PROPERTY_TYPE_SUCCESS:
            return {
                ...state,
                propertyTypes: payload
            }
        case GET_PROPERTY_TYPE_FAILURE:
            return {
                ...state
            }
        case CLOSE_CANCELLATION_FLEXIBILITY:
            return {
                ...state,
                showCancellationFlexibility: !state.showCancellationFlexibility

            }
        case SHOW_MORE_FILTERS:
            return {
                ...state,
                showMoreFilter: !state.showMoreFilter
            }
        default:
            return { ...state }
    }
}

export default userReducer;