import React from 'react';
import Photo from "./Passbild.jpg"

// const SIZE = 3;
const PhotoLength = 600;


export const Square = (props) => {
    const SIZE = props.size;
    const PIECE_LENGTH =  PhotoLength / SIZE ;
    const NUM_PIECES = SIZE * SIZE;

    const top = Math.floor(props.pos / SIZE) * PIECE_LENGTH;
    const left = (props.pos % SIZE) * PIECE_LENGTH;
    const photoTop = Math.floor(props.index / SIZE) * PIECE_LENGTH;
    const photoLeft = (props.index % SIZE) * PIECE_LENGTH;
  
    if (props.index !== NUM_PIECES -1) {
        return (
        
        <div>
            <div className="square"
            id = {props.index}
            style = {{
                position: "absolute",
                width : `${PIECE_LENGTH}px`,
                height: `${PIECE_LENGTH}px`,
                top: top + 10,
                left: left + 10,
                backgroundPosition: `-${photoLeft}px -${photoTop}px`,
                backgroundImage: `url(${Photo})`,
                border: "3px solid grey"           
            }} 
            onClick = {props.onClick}
            >
                
            </div>
            </div>
        )
        } else {
            return (
                <div className = "square"
                id = {props.index}
                style = {{
                    width : `${PIECE_LENGTH}px`,
                    height: `${PIECE_LENGTH}px`,
                    top: top + 10,
                    left: left + 10,
                }}>

                </div>
            )

                
        }
    
}