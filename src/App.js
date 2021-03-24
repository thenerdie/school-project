import logo from './logo.svg';
import './App.css';

import data from "./Data.json"

import { Line, LineChart, XAxis, YAxis } from 'recharts'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TSI for collected data samples</h1>
        <LineChart width={1500} height={510} data={data}>
          <Line type="monotone" dataKey="TSI" stroke="#dff705" />
          <XAxis dataKey="Date" interval={7} padding={{ left: 50 }} label = {{ value: 'Date', position: 'center', dy: -40}}/>
          <YAxis label={{ value: 'Measured TSI', angle: -90, position: 'center', dx: -25}}/>
        </LineChart>
      </header>
    </div>
  );
}

export default App;
