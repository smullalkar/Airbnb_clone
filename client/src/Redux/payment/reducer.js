import { GET_DETAILS_OF_BOOKING } from "./actionTypes"

const initState = {
    bookingDetails: [],
    otherDetails : []
}

const paymentReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_DETAILS_OF_BOOKING:
            console.log(payload)
            return {
                ...state,
                bookingDetails : payload[0],
                otherDetails : payload[1]

            }
        default:
            return {
                ...state
            }
    }
}

export default paymentReducer