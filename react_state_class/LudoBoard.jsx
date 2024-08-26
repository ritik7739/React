import { useState } from "react"

export default function LudoBoard(){
    let [moves,setMoves]=useState({blue:0,yellow:0,green:0,red:0});//intialistion
    
    let updateBlue=(prevMoves)=>{
        console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves)=>{
        return {...prevMoves,blue:prevMoves.blue+1};//using spread operator
    });
    };
    let updateYellow=(prevMoves)=>{
        console.log(`moves.yellow = ${moves.yellow}`);
        setMoves((prevMoves)=>{
        return {...prevMoves,yellow:prevMoves.yellow+1};//using spread operator
    });
    };
    let updateGreen=(prevMoves)=>{
        console.log(`moves.green = ${moves.green}`);
        setMoves((prevMoves)=>{
        return {...prevMoves,green:prevMoves.green+1};//using spread operator
    });
    };
    let updateRed=(prevMoves)=>{
        console.log(`moves.red = ${moves.red}`);
        setMoves((prevMoves)=>{
        return {...prevMoves,red:prevMoves.red+1};//using spread operator
    });
    };
    return (
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue moves={moves.blue} </p>
                <button onClick={updateBlue} style={{ backgroundColor:"blue" }}>+1</button>
            </div>
            <div className="board">
                <p>Yellow moves={moves.yellow} </p>
                <button onClick={updateYellow} style={{ backgroundColor:"yellow" }}>+1</button>
            </div>
            <div className="board">
                <p>Green moves={moves.green} </p>
                <button onClick={updateGreen} style={{ backgroundColor:"green" }}>+1</button>
            </div>
            <div className="board">
                <p>Red moves={moves.red} </p>
                <button onClick={updateRed} style={{ backgroundColor:"red" }}>+1</button>
            </div>

        </div>
    );

}