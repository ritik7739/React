import { useNavigate } from 'react-router-dom'; 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Dashboard from './Dashboard'
// import Landing from './Landing'

//using lazy import for optimization better user experiances
import { lazy, Suspense } from 'react';
const Dashboard=lazy(()=>import("./Dashboard"));
const Landing=lazy(()=>import("./Landing"));

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

//   return (
//     <div>
//       {/* Add a navbar here */}
//       <div style={{background:"black", color:"white"}}>
//           <h3>I'm Navbar</h3>
//       </div>
//     <BrowserRouter>
//      <Appbar/>
//      <Routes>
//             <Route path="/" element={<Landing/>}></Route>
//             <Route path="/dashboard" element={<Dashboard/>}></Route>
//      </Routes>
//     </BrowserRouter>
//     </div>
//   );
// }

// function Appbar(){
//   const navigate=useNavigate();
//   return(
//     <div>
//        <button onClick={()=>{
//         navigate("/")
//        }}>Landing</button>

//        <button onClick={()=>{
//         navigate("/dashboard")
//        }}>Dashboard</button>
//     </div>
//   );

//------------------------------------------------------ OPTIMIZE CODE --------------------------------------------

return(
  <div>
    <BrowserRouter>
    <Appbar/>
    <Routes>
      <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}></Route>
      <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
)

function Appbar(){
  const navigate=useNavigate();
  return(
    <div>
      <button onClick={()=>{navigate("/dashboard")}}>Dashboard Page</button>
      <button onClick={()=>{navigate("/")}}>Landing Page</button>
    </div>
  )
}


}

export default App
