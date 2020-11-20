import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div style={{
    color: 'black', 
    background: '#be976a',
    padding: '10px 15px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: -54.81,
      lng: -68.32
    },
    zoom: 16
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBqBsbPwh02kC6OIKpIvCtRLwdPrJvmKtM' }}
          defaultCenter={{lat: -54.815255,lng: -68.328965}}
          defaultZoom={16}
        >
          <AnyReactComponent
            lat={-54.815255}
            lng={-68.328965}
            text="Bien Al Sur"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;