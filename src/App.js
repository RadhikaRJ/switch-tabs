import logo from './logo.svg';
import './App.css';
import {useState} from "react";

import ShowSelectedPage from './Components/ShowSelectedPage';

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
     
     <ShowSelectedPage displayComponent={displayComponent}/>
    
    </div>
  );
}

export default App;
