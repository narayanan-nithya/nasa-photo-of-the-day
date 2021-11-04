import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import Image from './Image.js';
import {BASE_URL, API_KEY} from './index.js';
function App() {
  const [nasaImg, setNasaImg] = useState(null)
  const [nasaTitle, setNasaTitle] = useState(null)

    useEffect (() => {
      axios.get (`${BASE_URL}api_key=${API_KEY}`)
      .then(res => {
        setNasaImg(res.data.hdurl);
        setNasaTitle(res.data.title);
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
        < Image nasaImg = {nasaImg} nasaTitle = {nasaTitle} />
      </p>
    </div>
  );
}

export default App;
