import { useState } from "react";

export default function Counter(){
    const [count,setcount]=useState(0);
    function incCount(){
        setcount(count+1);
        console.log(count);
    }
    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}