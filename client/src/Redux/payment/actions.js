import { GET_DETAILS_OF_BOOKING } from "./actionTypes"

export const getDetailsOfBooking = payload => ({
    type: GET_DETAILS_OF_BOOKING,
    payload
})



//Actions to Send the booking request for a particular property Start
// export const sendBookingRequest = () => ({
//     type: SEND_BOOKING_REQUEST
// });

// export const sendBookingSuccess = payload => ({
//     type: SEND_BOOKING_SUCECSS,
//     payload
// });

// export const sendBookingFailure = () => ({
//     type: SEND_BOOKING_FAILURE
// });

// export const sendBooking = payload => {
//     console.log(payload)
//     return dispatch => {
//         dispatch(sendBookingRequest());
//         return axios
//             .post("https://run.mocky.io/v3/c4d7e8e0-db36-4197-8780-bf2fe8606eb7")
//             .then(res => dispatch(sendBookingSuccess(res.data.data)))
//             .catch(() => dispatch(sendBookingFailure()));
//     };
// }
// //Actions to Send the booking request for a particular property End
