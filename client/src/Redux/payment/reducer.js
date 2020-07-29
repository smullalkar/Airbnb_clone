import { GET_DETAILS_OF_BOOKING } from "./actionTypes"

const initState = {
    bookingDetails: []
}

const paymentReducer = (state = initState, { type, payload }) => {
    console.log(payload)
    switch (type) {
        case GET_DETAILS_OF_BOOKING:
            return {
                ...state,
                bookingDetails : [...state.bookingDetails, payload]
            }
        default:
            return {
                ...state
            }
    }
}

export default paymentReducer