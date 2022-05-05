import React from "react";
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

import Filter from '../Filter/Filter';
import Timeline from '../Timeline/Timeline';




export default function SimpleMap(props) {
  const defaultProps = {
    center: {
      lat: 35.3071,
      lng: -80.7352
    },
    zoom: 16.8
  };

  async function heatMapLow() {
    props.setHeatMapTraffic('low')
    const res = await axios.get(`https://wifivedata.ishankumar11.repl.co/${props.heatMapDay}/${props.heatMapTime}/${props.heatMapTraffic}`)
    console.log(res.data)
    props.setHeatMapData(res.data);
    props.setMapKey(1)

  }

  async function heatMapMedium() {
    props.setHeatMapTraffic('medium')
    const res = await axios.get(`https://wifivedata.ishankumar11.repl.co/${props.heatMapDay}/${props.heatMapTime}/${props.heatMapTraffic}`)
    console.log(res.data)
    props.setHeatMapData(res.data);
    props.setMapKey(2)

  }

  async function heatMapHigh() {
    props.setHeatMapTraffic('high')
    const res = await axios.get(`https://wifivedata.ishankumar11.repl.co/${props.heatMapDay}/${props.heatMapTime}/${props.heatMapTraffic}`)
    console.log(res.data)
    props.setHeatMapData(res.data);
    props.setMapKey(3)
  }

  async function heatMapMonday() {
    props.setHeatMapDay('monday')
    const res = await axios.get(`https://wifivedata.ishankumar11.repl.co/${props.heatMapDay}/${props.heatMapTime}/${props.heatMapTraffic}`)
    console.log(res.data)
    props.setHeatMapData(res.data);
    props.setMapKey(1)

  }

  async function heatMapTuesday() {
    props.setHeatMapDay('tuesday')
    const res = await axios.get(`https://wifivedata.ishankumar11.repl.co/${props.heatMapDay}/${props.heatMapTime}/${props.heatMapTraffic}`)
    console.log(res.data)
    props.setHeatMapData(res.data);
    props.setMapKey(2)

  }

  async function heatMapWednesday() {
    props.setHeatMapDay('wednesday')
    const res = await axios.get(`https://wifivedata.ishankumar11.repl.co/${props.heatMapDay}/${props.heatMapTime}/${props.heatMapTraffic}`)
    console.log(res.data)
    props.setHeatMapData(res.data);
    props.setMapKey(3)
  }

  async function heatMapThursday() {
    props.setHeatMapDay('thursday')
    const res = await axios.get(`https://wifivedata.ishankumar11.repl.co/${props.heatMapDay}/${props.heatMapTime}/${props.heatMapTraffic}`)
    console.log(res.data)
    props.setHeatMapData(res.data);
    props.setMapKey(1)

  }

  async function heatMapFriday() {
    props.setHeatMapDay('friday')
    const res = await axios.get(`https://wifivedata.ishankumar11.repl.co/${props.heatMapDay}/${props.heatMapTime}/${props.heatMapTraffic}`)
    console.log(res.data)
    props.setHeatMapData(res.data);
    props.setMapKey(2)

  }






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

      <Filter heatMapMonday={heatMapMonday} heatMapTuesday={heatMapTuesday} heatMapWednesday={heatMapWednesday} heatMapThursday={heatMapThursday} heatMapFriday={heatMapFriday} heatMapLow={heatMapLow} heatMapMedium={heatMapMedium} heatMapHigh={heatMapHigh} />
      <div className='timeline'><Timeline setHeatMapTime={props.setHeatMapTime} heatMapTime={props.heatMapTime} sliderChange={props.sliderChange} /></div>

    </div>
  );
}