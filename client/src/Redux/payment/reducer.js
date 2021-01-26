import { GET_DETAILS_OF_BOOKING } from "./actionTypes"

const initState = {
    bookingDetails: [],
    otherDetails : []
}

const paymentReducer = (state = initState, { type, payload }) => {
    console.log("it is payload : ",payload)
    switch (type) {
        case GET_DETAILS_OF_BOOKING:
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