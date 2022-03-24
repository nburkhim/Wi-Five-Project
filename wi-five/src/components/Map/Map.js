import React from "react";
import GoogleMapReact from 'google-map-react';
import heatMapData from './heatmapdata.json'



export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 35.3071,
      lng: -80.7352
    },
    zoom: 16.8
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '70vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCH_LrL0jG49y3bH60j4yeC-UcqbhOhMck" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        heatmapLibrary={true}
        heatmap={heatMapData}

      >

      </GoogleMapReact>
    </div>
  );
}