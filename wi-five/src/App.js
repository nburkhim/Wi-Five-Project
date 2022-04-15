import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './components/Map/Map';
import Navbar from './components/NavBar/NavBar';
import Timeline from './components/Timeline/Timeline';
import './App.css';
import Filter from './components/Filter/Filter';
import heatMapG from './components/Map/heatmapg.json';
import heatMapY from './components/Map/heatmapy.json';
import heatMapR from './components/Map/heatmapr.json';
import Home from './components/Home/Home';



function App() {
  const dayNum = new Date().getDay();
  const time = new Date().getHours();

  const [heatMapData, setHeatMapData] = useState({})
  const [mapKey, setMapKey] = useState(0)
  const [heatMapDay] = useState(getDay())
  const [heatMapTime, setHeatMapTime] = useState(getTime())

  useEffect(() => {

    const getDefault = async () => {

      const res = await axios.get(`https://wifivedata.ishankumar11.repl.co/${heatMapDay}/${heatMapTime}`)
      console.log(res.data)
      let positions = res.data.positions
      let options = res.data.options
      setHeatMapData({ positions, options });
    }
    getDefault();


  }, [])


  function getDay() {
    switch (dayNum) {
      case 0:
        return 'monday'

      case 1:
        return 'tuesday'

      case 2:
        return 'wednesday'

      case 3:
        return 'thursday'

      case 4:
        return 'friday'

      case 5:
        return 'saturday'

      case 6:
        return 'sunday'

    }

  }

  function getTime() {
    if (time <= 8) {
      return 8
    } else if (time > 8 && time <= 10) {
      return 10
    } else if (time > 10 && time <= 12) {
      return 12
    } else if (time > 12 && time <= 14) {
      return 14
    } else if (time > 14 && time <= 16) {
      return 16
    } else if (time > 16 && time <= 18) {
      return 18
    } else if (time > 18 && time <= 20) {
      return 20
    } else if (time > 20 && time <= 22) {
      return 22
    }

  }


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

  function sliderChange(sliderValue) {
    setHeatMapTime(sliderValue)
    console.log(heatMapTime)
  }

  return (
    <div className='container'>
      <div><Navbar /></div>
      <div><Map mapKey={mapKey} heatMapData={heatMapData} /></div>
      <div><Filter heatMapLow={heatMapLow} heatMapMedium={heatMapMedium} heatMapHigh={heatMapHigh} /></div>
      <div className='timeline'><Timeline sliderChange={sliderChange} /></div>


    </div>
  );
}

export default App;
