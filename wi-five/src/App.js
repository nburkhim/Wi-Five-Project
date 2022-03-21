import Map from './components/Map/Map';
import Navbar from './components/NavBar/NavBar';
import Timeline from './components/Timeline/Timeline';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div><Navbar /></div>
      <div><Map/></div>
      <div className='timeline'><Timeline/></div>
      
    </div>
  );
}

export default App;
