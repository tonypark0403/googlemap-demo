import React from 'react';
import WrappedMap from './WrappedMap';
import config from './config';

function App() {
  return (
    <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.googleKey}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: '100vh' }} />}
      containerElement={<div style={{ height: '100vh' }} />}
      mapElement={<div style={{ height: '100vh' }} />}
    />
  );
}

export default App;
