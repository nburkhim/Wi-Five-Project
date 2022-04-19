import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './components/Map/Map';
import Navbar from './components/NavBar/NavBar';

import './App.css';
import { Route, Routes } from 'react-router-dom'


import Home from './components/Home/Home';




function App() {
  const [heatMapData, setHeatMapData] = useState({})
  const [mapKey, setMapKey] = useState(0)
  const [heatMapDay] = useState(getDay())
  const [heatMapTime, setHeatMapTime] = useState(getTime())

  useEffect(() => {

    const getDefault = async () => {
      console.log(heatMapTime)
      const res = await axios.get(`https://wifivedata.ishankumar11.repl.co/${heatMapDay}/${heatMapTime}`)
      console.log(res.data)

      setHeatMapData(res.data);
    }
    getDefault();


  }, [])


  function getDay() {

    const dayNum = new Date().getDay();

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

      default:
        return 'monday'

    }

  }

  function getTime() {
    const time = new Date().getHours();

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
    } else if (time > 20) {
      return 22
    }

  }




  async function sliderChange() {
    const res = await axios.get(`https://wifivedata.ishankumar11.repl.co/${heatMapDay}/${heatMapTime}`)
    console.log(res.data)
    setHeatMapData(res.data);
    setMapKey(Math.random())
  }

  return (
    <div className='container'>
      <Navbar />
      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route exact path='/Map' element={<Map mapKey={mapKey} setHeatMapTime={setHeatMapTime} setHeatMapData={setHeatMapData} heatMapTime={heatMapTime} setMapKey={setMapKey} sliderChange={sliderChange} heatMapData={heatMapData} />} />

      </Routes>

    </div>
  );
}

export default App;
