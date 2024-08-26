import { useState,useEffect } from "react";

export default function Counter(){
    let [count,setCount]=useState(0);
    let  IncCount=()=> {
        setCount(count+1);
    }
    
    useEffect(function PrintSomething(){
        console.log("you're calling sideEffect");
    });

    return(
        <div>
            <h4>Count={count}</h4>
            <button onClick={IncCount}>+1</button>
        </div>
    )
}