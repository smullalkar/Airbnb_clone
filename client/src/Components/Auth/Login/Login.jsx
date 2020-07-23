import React, { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import styles from "./Login.module.css";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {
  facebookLogin,
  googleLogin,
  loginUser,
} from "../../../Redux/authentication/actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: 0,
      phoneNumber: 0,
    };
  }
  responseFacebook = (response) => {
    const { facebookLogin } = this.props;
    facebookLogin(response);
  };
  responseGoogle = (response) => {
    const { googleLogin } = this.props;
    googleLogin(response);
  };

  handleChange = (e) => {
    this.setState({ countryCode: e.target.value });
  };

  handlePhone = (e) => {
    this.setState({ phoneNumber: e.target.value });
  };

  handleContinue = () => {
    const { loginUser } = this.props;
    const { countryCode, phoneNumber } = this.state;
    var number = "+" + Number(countryCode) + Number(phoneNumber);

    loginUser(number);
  };
  render() {
    const { show, handleLoginClose } = this.props;
    const countryCodes = [
      { code: 93, country: "Afghanistan" },
      { code: 355, country: "Albania" },
      { code: 213, country: "Algeria" },
      { code: 684, country: "American Samoa" },
      { code: 376, country: "Andorra" },
      { code: 244, country: "Angola" },
      { code: 809, country: "Anguilla" },
      { code: 268, country: "Antigua" },
      { code: 54, country: "Argentina" },
      { code: 374, country: "Armenia" },
      { code: 297, country: "Aruba" },
      { code: 247, country: "Ascension Island" },
      { code: 61, country: "Australia" },
      { code: 672, country: "Australian External Territories" },
      { code: 43, country: "Austria" },
      { code: 994, country: "Azerbaijan" },
      { code: 242, country: "Bahamas" },
      { code: 246, country: "Barbados" },
      { code: 973, country: "Bahrain" },
      { code: 880, country: "Bangladesh" },
      { code: 375, country: "Belarus" },
      { code: 32, country: "Belgium" },
      { code: 501, country: "Belize" },
      { code: 229, country: "Benin" },
      { code: 809, country: "Bermuda" },
      { code: 975, country: "Bhutan" },
      { code: 284, country: "British Virgin Islands" },
      { code: 591, country: "Bolivia" },
      { code: 387, country: "Bosnia and Hercegovina" },
      { code: 267, country: "Botswana" },
      { code: 55, country: "Brazil" },
      { code: 284, country: "British V.I." },
      { code: 673, country: "Brunei Darussalm" },
      { code: 359, country: "Bulgaria" },
      { code: 226, country: "Burkina Faso" },
      { code: 257, country: "Burundi" },
      { code: 855, country: "Cambodia" },
      { code: 237, country: "Cameroon" },
      { code: 1, country: "Canada" },
      { code: 238, country: "CapeVerde Islands" },
      { code: 1, country: "Caribbean Nations" },
      { code: 345, country: "Cayman Islands" },
      { code: 238, country: "Cape Verdi" },
      { code: 236, country: "Central African Republic" },
      { code: 235, country: "Chad" },
      { code: 56, country: "Chile" },
      { code: 86, country: "China (People's Republic)" },
      { code: 886, country: "China-Taiwan" },
      { code: 57, country: "Colombia" },
      { code: 269, country: "Comoros and Mayotte" },
      { code: 242, country: "Congo" },
      { code: 682, country: "Cook Islands" },
      { code: 506, country: "Costa Rica" },
      { code: 385, country: "Croatia" },
      { code: 53, country: "Cuba" },
      { code: 357, country: "Cyprus" },
      { code: 420, country: "Czech Republic" },
      { code: 45, country: "Denmark" },
      { code: 246, country: "Diego Garcia" },
      { code: 767, country: "Dominca" },
      { code: 809, country: "Dominican Republic" },
      { code: 253, country: "Djibouti" },
      { code: 593, country: "Ecuador" },
      { code: 20, country: "Egypt" },
      { code: 503, country: "El Salvador" },
      { code: 240, country: "Equatorial Guinea" },
      { code: 291, country: "Eritrea" },
      { code: 372, country: "Estonia" },
      { code: 251, country: "Ethiopia" },
      { code: 500, country: "Falkland Islands" },
      { code: 298, country: "Faroe (Faeroe) Islands (Denmark)" },
      { code: 679, country: "Fiji" },
      { code: 358, country: "Finland" },
      { code: 33, country: "France" },
      { code: 596, country: "French Antilles" },
      { code: 594, country: "French Guiana" },
      { code: 241, country: "Gabon (Gabonese Republic)" },
      { code: 220, country: "Gambia" },
      { code: 995, country: "Georgia" },
      { code: 49, country: "Germany" },
      { code: 233, country: "Ghana" },
      { code: 350, country: "Gibraltar" },
      { code: 30, country: "Greece" },
      { code: 299, country: "Greenland" },
      { code: 473, country: "Grenada/Carricou" },
      { code: 671, country: "Guam" },
      { code: 502, country: "Guatemala" },
      { code: 224, country: "Guinea" },
      { code: 245, country: "Guinea-Bissau" },
      { code: 592, country: "Guyana" },
      { code: 509, country: "Haiti" },
      { code: 504, country: "Honduras" },
      { code: 852, country: "Hong Kong" },
      { code: 36, country: "Hungary" },
      { code: 354, country: "Iceland" },
      { code: 91, country: "India" },
      { code: 62, country: "Indonesia" },
      { code: 98, country: "Iran" },
      { code: 964, country: "Iraq" },
      { code: 353, country: "Ireland (Irish Republic; Eire)" },
      { code: 972, country: "Israel" },
      { code: 39, country: "Italy" },
      { code: 225, country: "Ivory Coast (La Cote d'Ivoire)" },
      { code: 876, country: "Jamaica" },
      { code: 81, country: "Japan" },
      { code: 962, country: "Jordan" },
      { code: 7, country: "Kazakhstan" },
      { code: 254, country: "Kenya" },
      { code: 855, country: "Khmer Republic (Cambodia/Kampuchea)" },
      { code: 686, country: "Kiribati Republic (Gilbert Islands)" },
      { code: 850, country: "Korea" },
      { code: 965, country: "Kuwait" },
      { code: 996, country: "Kyrgyz Republic" },
      { code: 371, country: "Latvia" },
      { code: 856, country: "Laos" },
      { code: 961, country: "Lebanon" },
      { code: 266, country: "Lesotho" },
      { code: 231, country: "Liberia" },
      { code: 370, country: "Lithuania" },
      { code: 218, country: "Libya" },
      { code: 423, country: "Liechtenstein" },
      { code: 352, country: "Luxembourg" },
      { code: 853, country: "Macao" },
      { code: 389, country: "Macedonia" },
      { code: 261, country: "Madagascar" },
      { code: 265, country: "Malawi" },
      { code: 60, country: "Malaysia" },
      { code: 960, country: "Maldives" },
      { code: 223, country: "Mali" },
      { code: 356, country: "Malta" },
      { code: 692, country: "Marshall Islands" },
      { code: 596, country: "Martinique (French Antilles)" },
      { code: 222, country: "Mauritania" },
      { code: 230, country: "Mauritius" },
      { code: 269, country: "Mayolte" },
      { code: 52, country: "Mexico" },
      { code: 691, country: "Micronesia (F.S. of Polynesia)" },
      { code: 373, country: "Moldova" },
      { code: 33, country: "Monaco" },
      { code: 976, country: "Mongolia" },
      { code: 473, country: "Montserrat" },
      { code: 212, country: "Morocco" },
      { code: 258, country: "Mozambique" },
      { code: 95, country: "Myanmar (former Burma)" },
      { code: 264, country: "Namibia (former South-West Africa)" },
      { code: 674, country: "Nauru" },
      { code: 977, country: "Nepal" },
      { code: 31, country: "Netherlands" },
      { code: 599, country: "Netherlands Antilles" },
      { code: 869, country: "Nevis" },
      { code: 687, country: "New Caledonia" },
      { code: 64, country: "New Zealand" },
      { code: 505, country: "Nicaragua" },
      { code: 227, country: "Niger" },
      { code: 234, country: "Nigeria" },
      { code: 683, country: "Niue" },
      { code: 850, country: "North Korea" },
      { code: 1670, country: "North Mariana Islands (Saipan)" },
      { code: 47, country: "Norway" },
      { code: 968, country: "Oman" },
      { code: 92, country: "Pakistan" },
      { code: 680, country: "Palau" },
      { code: 507, country: "Panama" },
      { code: 675, country: "Papua New Guinea" },
      { code: 595, country: "Paraguay" },
      { code: 51, country: "Peru" },
      { code: 63, country: "Philippines" },
      { code: 48, country: "Poland" },
      { code: 351, country: "Portugal (includes Azores)" },
      { code: 1787, country: "Puerto Rico" },
      { code: 974, country: "Qatar" },
      { code: 262, country: "Reunion (France)" },
      { code: 40, country: "Romania" },
      { code: 7, country: "Russia" },
      { code: 250, country: "Rwanda (Rwandese Republic)" },
      { code: 670, country: "Saipan" },
      { code: 378, country: "San Marino" },
      { code: 239, country: "Sao Tome and Principe" },
      { code: 966, country: "Saudi Arabia" },
      { code: 221, country: "Senegal" },
      { code: 381, country: "Serbia and Montenegro" },
      { code: 248, country: "Seychelles" },
      { code: 232, country: "Sierra Leone" },
      { code: 65, country: "Singapore" },
      { code: 421, country: "Slovakia" },
      { code: 386, country: "Slovenia" },
      { code: 677, country: "Solomon Islands" },
      { code: 252, country: "Somalia" },
      { code: 27, country: "South Africa" },
      { code: 34, country: "Spain" },
      { code: 94, country: "Sri Lanka" },
      { code: 290, country: "St. Helena" },
      { code: 869, country: "St. Kitts/Nevis" },
      { code: 508, country: "St. Pierre &(et) Miquelon (France)" },
      { code: 249, country: "Sudan" },
      { code: 597, country: "Suriname" },
      { code: 268, country: "Swaziland" },
      { code: 46, country: "Sweden" },
      { code: 41, country: "Switzerland" },
      { code: 963, country: "Syrian Arab Republic (Syria)" },
      { code: 689, country: "Tahiti (French Polynesia)" },
      { code: 886, country: "Taiwan" },
      { code: 7, country: "Tajikistan" },
      { code: 255, country: "Tanzania (includes Zanzibar)" },
      { code: 66, country: "Thailand" },
      { code: 228, country: "Togo (Togolese Republic)" },
      { code: 690, country: "Tokelau" },
      { code: 676, country: "Tonga" },
      { code: 1868, country: "Trinidad and Tobago" },
      { code: 216, country: "Tunisia" },
      { code: 90, country: "Turkey" },
      { code: 993, country: "Turkmenistan" },
      { code: 688, country: "Tuvalu (Ellice Islands)" },
      { code: 256, country: "Uganda" },
      { code: 380, country: "Ukraine" },
      { code: 971, country: "United Arab Emirates" },
      { code: 44, country: "United Kingdom" },
      { code: 598, country: "Uruguay" },
      { code: 1, country: "USA" },
      { code: 7, country: "Uzbekistan" },
      { code: 678, country: "Vanuatu (New Hebrides)" },
      { code: 39, country: "Vatican City" },
      { code: 58, country: "Venezuela" },
      { code: 84, country: "Viet Nam" },
      { code: 1340, country: "Virgin Islands" },
      { code: 681, country: "Wallis and Futuna" },
      { code: 685, country: "Western Samoa" },
      { code: 381, country: "Yemen (People's Democratic Republic of)" },
      { code: 967, country: "Yemen Arab Republic (North Yemen)" },
      { code: 381, country: "Yugoslavia (discontinued)" },
      { code: 243, country: "Zaire" },
      { code: 260, country: "Zambia" },
      { code: 263, country: "Zimbabwe" },
    ];
    return (
      <div>
        <Modal show={show} animation={false} onHide={handleLoginClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">Login</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group>
              <Form.Control as="select" size="lg" onChange={this.handleChange}>
                <option>Country/Region</option>
                {countryCodes.map((item) => (
                  <option key={uuidv4()} value={item.code}>
                    {" "}
                    {"(" + item.code + ") " + item.country}{" "}
                  </option>
                ))}
              </Form.Control>
              <Form.Control
                size="lg"
                type="number"
                placeholder="Phone Number"
                onChange={this.handlePhone}
              />
              <Form.Text muted className="my-2">
                We’ll call or text you to confirm your number. Standard message
                and data rates apply.
              </Form.Text>

              <Button
                className={styles.btn}
                size="lg"
                block
                onClick={this.handleContinue}
              >
                Continue
              </Button>

              <hr />

              <div className="my-2">
                <Button variant="outline-secondary" size="lg" block>
                  Continue with Email
                </Button>
                <FacebookLogin
                  appId="990031718084542"
                  fields="name,email,picture"
                  scope="email, public_profile, user_birthday"
                  callback={this.responseFacebook}
                  icon="fa-facebook"
                  render={(renderProps) => (
                    <Button
                      variant="outline-secondary"
                      size="lg"
                      block
                      onClick={renderProps.onClick}
                    >
                      {" "}
                      Continue with Facebook
                    </Button>
                  )}
                />
                ,
                <div variant="outline-secondary" size="lg">
                  <i className="fab fa-facebook-f blue-text text-center"></i>{" "}
                  <GoogleLogin
                    clientId="304743879385-hes3s6fpp9ijfvi74odg20d4nu5aoudc.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        This is my custom Google button
                      </button>
                    )}
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                  ,
                </div>
                <Button variant="outline-secondary" size="lg" block>
                  Continue with Apple
                </Button>
                <div className="d-flex ">
                  <Form.Text muted className="mx-2">
                    Don’t have an account?
                  </Form.Text>
                  Sign up
                </div>
              </div>
            </Form.Group>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  isLoading: state.authReducer.isLoading,
  payload: state.authReducer.payload,
  error: state.authReducer.error,
  errorMessage: state.authReducer.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  facebookLogin: (payload) => dispatch(facebookLogin(payload)),
  googleLogin: (payload) => dispatch(googleLogin(payload)),
  loginUser: (payload) => dispatch(loginUser(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
