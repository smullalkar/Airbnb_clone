import { GET_DETAILS_OF_BOOKING } from "./actionTypes"

const initState = {
    bookingDetails: []
}

const paymentReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_DETAILS_OF_BOOKING:
            console.log(payload)
            return {
                ...state,
                bookingDetails : payload
            }
        default:
            return {
                ...state
            }
    }
}

export default paymentReducer