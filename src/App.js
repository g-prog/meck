import './index.css'
import Health from './components/health/Health'
import Trial from './components/trial/trial'


const App = () => {
  
  return (
    <div className="App">
      <Health/>
      <Trial/>
      <button onClick={getLocation}>Get Location</button>
      <h1>Coordinates</h1>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Longitude: {lng}</p>}
    </div>
  );
}

export default App;