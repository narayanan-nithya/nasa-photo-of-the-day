import React from "react";
import './Image.css'

export default function Image (props) {
   
    const {nasaImg, nasaTitle} = props ;
    return(
        <div className = "nasa-container">
            <img src= {nasaImg} width = '500px' height = '300px'/>
            <h2>{nasaTitle}</h2>

        </div>
    );
     
};
