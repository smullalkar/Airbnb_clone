import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { location } = this.props;
    console.log(location);
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 13.028259,
          lng: 77.543052,
        }}
        zoom={11}
      >
        {location.map((item) => (
          <Marker position={item} />
        ))}
        <Marker />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCcS0j7hDpSs-F4xDi2q6AkTD_sWqECR9M",
})(MapContainer);
