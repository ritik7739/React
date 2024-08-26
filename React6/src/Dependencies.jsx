import { useState,useEffect} from "react";

export default function Dependencies(){
    let [countX,setCountX]=useState(0);
    let [countY,setCountY]=useState(0);
    

    let IncCountX=()=>{
        setCountX(countX+1);
    }

    let IncCountY=()=>{
        setCountY(countY+1);
    }
    //Dependencies passes which implies that useEffect is working on only one component that is countX
    useEffect(function PrintSomething(){
        console.log("Side effect is Calling");
    },[countX]);
    return(
    <div>
       <h4>CountX={countX}</h4>
       <button onClick={IncCountX}>+1</button>
       <br/> <br/>
       <h4>CountY={countY}</h4>
       <button onClick={IncCountY}>+1</button>
    </div>
    
)
}