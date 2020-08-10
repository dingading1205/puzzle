import React from 'react';
import Photo from "./photo.jpg"

// const SIZE = 3;
const PhotoLength = 600;


export const Square = (props) => {
    // const SIZE = props.size;
    const PIECE_LENGTH =  PhotoLength / props.size ;
    const NUM_PIECES = props.size * props.size;

    const top = Math.floor(props.pos / props.size) * PIECE_LENGTH;
    const left = (props.pos % props.size) * PIECE_LENGTH;
    const photoTop = Math.floor(props.index / props.size) * PIECE_LENGTH;
    const photoLeft = (props.index % props.size) * PIECE_LENGTH;
  
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