import React, { useState, useEffect, Fragment } from 'react';
// import axios from 'axios';
import Map from './components/Map/Map';
import Navbar from './components/NavBar/NavBar';
import Timeline from './components/Timeline/Timeline';
import './App.css';
import Filter from './components/Filter/Filter';
import heatMapG from './components/Map/heatmapg.json';
import heatMapY from './components/Map/heatmapy.json';
import heatMapR from './components/Map/heatmapr.json';
// import Home from './components/Home/Home';



function App() {

  const [heatMapData, setHeatMapData] = useState({})
  const [mapKey, setMapKey] = useState(0)

  useEffect(() => {
    //   const getDefault = async () => {
    //     const res = await axios.get('https://wifivedata.ishankumar11.repl.co/thursday/12')
    //     console.log('hi')
    //     setHeatMapData(res.data);
    //   }
    //   getDefault();


  }, [])


  function heatMapLow() {
    setHeatMapData({ ...heatMapG })
    setMapKey(1)

  }

  function heatMapMedium() {
    setHeatMapData({ ...heatMapY })
    setMapKey(2)

  }

  function heatMapHigh() {
    setHeatMapData({ ...heatMapR })
    setMapKey(3)
  }

  return (
    <div className='container'>
      <div><Navbar /></div>
      <div><Map mapKey={mapKey} heatMapData={heatMapData} /></div>
      <div><Filter heatMapLow={heatMapLow} heatMapMedium={heatMapMedium} heatMapHigh={heatMapHigh} /></div>
      <div className='timeline'><Timeline /></div>


    </div>
  );
}

export default App;
