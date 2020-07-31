import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    var bounds = [
      { lat: 13.187984, lng: 77.562265 },
      { lat: 12.966599, lng: 77.637796 },
      { lat: 12.945855, lng: 77.576685 },
      { lat: 13.165922, lng: 77.626124 },
      { lat: 13.052234, lng: 77.506647 },
      { lat: 13.443111, lng: 77.744053 },
      { lat: 13.284114, lng: 77.539433 },
      { lat: 13.334897, lng: 77.991246 },
    ];
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 13.028259,
          lng: 77.543052,
        }}
        zoom={14}
        bounds={bounds}
      >
        {bounds.map((item) => (
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
