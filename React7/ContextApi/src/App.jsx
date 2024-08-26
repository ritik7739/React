import { useContext, useState } from 'react'
import './App.css'
import { CounterContext } from './Context'
function App() {
  const [count, setCount] = useState(0);

  return (
   <div>
       <CounterContext.Provider value={count}>
           <Counter setCount={setCount}/>
       </CounterContext.Provider>
   </div>
  )
}

function Counter({setCount}){
    return(
      <div>
        <CountRender/>
        <Buttons setCount={setCount}/>
      </div>
    )
}

function CountRender(){
  const count=useContext(CounterContext);
  return(
  <div>
    {count}
  </div>
  )
}

function Buttons({setCount}){
  const count=useContext(CounterContext);
  return(
    <div>
      <button onClick={()=>{setCount(count+1)}}>Increase</button>
      <button onClick={()=>{setCount(count-1)}}>Decrease</button>
    </div>
  )
}


export default App
