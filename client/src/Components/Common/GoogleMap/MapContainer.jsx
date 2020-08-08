import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { v4 as uuidv4} from "uuid";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { location } = this.props;
    console.log(location);
    return (
      <div>
        {location.length > 0 ? (
          <Map
            google={this.props.google}
            initialCenter={{
              lat: 13.028259,
              lng: 77.543052,
            }}
            zoom={11}
          >
            {location.map((item) => (
              <Marker key={uuidv4()} position={item} />
            ))}
            <Marker />
          </Map>
        ) : null}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapContainer);
