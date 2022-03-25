import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import heatMapG from './heatmapg.json';
import heatMapY from './heatmapy.json';
import heatMapR from './heatmapr.json';



export default function SimpleMap(props) {
  const defaultProps = {
    center: {
      lat: 35.3071,
      lng: -80.7352
    },
    zoom: 16.8
  };




  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '80vh', width: '80%', margin: ' 50px auto' }}>
      <GoogleMapReact
        key={props.mapKey}
        bootstrapURLKeys={{ key: "AIzaSyCH_LrL0jG49y3bH60j4yeC-UcqbhOhMck" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        heatmapLibrary={true}
        heatmap={props.heatMapData}

      >

      </GoogleMapReact>

    </div>
  );
}