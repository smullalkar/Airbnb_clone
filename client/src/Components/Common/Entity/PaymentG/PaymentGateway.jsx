import React, { Component } from "react";
import axios from "axios";

class PaymentGateway extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	// componentDidMount = () => {

	// }

	razorPay = async (details) => {
		const { history } = this.props;

		try {
			let order_res = await axios.post(
				"http://127.0.0.1:5000/payment/getOrderId",
				{
					amount: Number(details["price"]) * 100,
					currency: "INR",
					receipt: details["id"] + "#" + details["name"] + "#" + Date.now(),
					payment_capture: "1",
				}
			);

			var options = {
				key: "rzp_test_3S2Ud4WlsY59BD", // Enter the Key ID generated from the Dashboard
				amount: Number(details["price"]) * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
				currency: "INR",
				name: details["name"],
				description: "Test Transaction",
				image:
					"https://static.dezeen.com/uploads/2014/07/Airbnb-rebrand-by-DesignStudio_dezeen_468_8.jpg",
				order_id: order_res["data"]["id"], //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
				prefill: {
					name: "Username",
					email: "User email-address",
					contact: "9999999999",
				},
				notes: {
					address: "Razorpay Corporate Office",
				},
				theme: {
					color: "#F37254",
				},
				handler: async (response) => {
					console.log(response);
					let final_res = await axios.post(
						"http://127.0.0.1:5000/payment/getValidation",
						{
							...response,
						}
					);
					if (final_res["data"]["status"] == "success") {
						alert(final_res["data"]["message"]);
						history.push("/");
					} else {
						alert(final_res["data"]["message"]);
					}
				},
			};
			const rzp_trial = window.Razorpay(options);
			rzp_trial.open();
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<div>
				<button onClick={this.razorPay}>Pay</button>
			</div>
		);
	}
}


const mapStateToProps = state => {
    console.log('bill added?', )
    return {
        bookingDetails: state.paymentReducer.bookingDetails
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaymentGateway);