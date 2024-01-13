import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
 
const title = 'More Then 60,000 Customers';

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";




class Location extends Component {
  render() {
    return (
      <div className='text-center mt-5 p-2'>
        <h2 className='text-[22px]'>{title}</h2>
        <h2 className='font-mono py-2'>{desc}</h2>
        <div style={{ height: '400px', width: '100%' }}>
          <Map
            google={this.props.google}
            zoom={10}
            initialCenter={{
              lat: 23.684994,
              lng: 90.356331
            }}
          />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDngEAq-O51yViHRfRAG2UI6FYktkrdBec'
})(Location);