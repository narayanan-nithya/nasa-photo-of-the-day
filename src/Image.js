import React, {useState, useEffect} from "react";
import './Image.css'

export default function Photo(props) {
   
    const {pic, title} = props ;
    return(
        <div className = "nasa-container">
            <h2>{props.title}</h2>
            <img src ={props.url} alt ="nasa photo of the day"/>
        </div>
    );
     
};
