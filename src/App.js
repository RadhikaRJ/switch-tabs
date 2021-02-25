import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Home from './Components/Home';
import About from './Components/About';
import Profilee from './Components/Profile';

function App() {

  const [displayComponent,setdisplayComponent]= useState("");
  return (
    <div className="App">
      <button onClick={()=>setdisplayComponent("Home")}>Home</button><span> </span>
      <button onClick={()=>setdisplayComponent("About")}>About</button><span> </span>
      <button onClick={()=>setdisplayComponent("Profile")}>Profile</button>
      <br></br>
      <br></br>
     {displayComponent}
     <Home/>
     <About/>
     <Profilee/>
    </div>
  );
}

export default App;
