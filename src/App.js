import React from "react";
import { Board } from "./Board";
import "./App.css";
import Photo from "./photo.jpg";
import {Image} from "react-bootstrap"

export const App = (props) => {
 
  return(

  <div className="app">
    <h1> Hello Puzzle</h1>
    <Board />
    <Image src={Photo} thumbnail style={{
      position: "fixed",
      top: "80px",
      left: "700px",
      width: "200px",
      height: "200px",
      border: "5px solid white"
    }}></Image>
  </div>
)

};
