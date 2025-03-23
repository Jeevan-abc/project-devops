import { useState } from 'react'

import './App.css'
import axios from 'axios';

interface ApiResponse {
  message:string,
  data:string
}
function App() {
  const [data, setData] = useState<ApiResponse | null>(null);



  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
    <h1>Devops  Demo</h1>
    <button onClick={fetchData}>Get Data</button>
    {data && (
      <div>
        <p>{data.message}</p>
        <p>{data.data}</p>
      </div>
    )}
  </div>
  )
}

export default App
