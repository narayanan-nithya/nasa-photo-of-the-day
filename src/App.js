import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import Photo from './Image';
import {BASE_URL, API_KEY} from './index.js';
function App() {
  const [nasaData, setNasaData] = useState(null)
    useEffect (() => {
      axios.get (`${BASE_URL}api_key=${API_KEY}`)
      .then(res => {
        setNasaData(res.data);
        //console.log(res.data);
      }).catch (err =>{
        console.log(err);
      });
    }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        < Photo pic = {nasaData.url} title = {nasaData.title} />
      </p>
    </div>
  );
}

export default App;
