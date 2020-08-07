import React, { useState } from "react";

const PhotoLength = 600;

export const StartGame = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        left: `${PhotoLength - 150}px`,
        height: "800px",
        textAlign: "center",
      }}
    >
      {/* Puzzle Size */}
      {/* <div onChange={props.onChange}>
                <input type="radio"  value="2" /> 2*2
                <input type="radio"  value="3" defaultChecked/> 3*3
                <input type="radio"  value="4" /> 4*4
            </div> */}
      <button
        onClick={props.onClick}
        style={{
          height: "30px",
        }}
      >
        {" "}
        New Game{" "}
      </button>
    </div>
  );
};
