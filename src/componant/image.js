import React, { useState } from "react";
import Menu from "./Menu"
const App=()=>{
  const[state,setstate]=useState();
  const Chang=(event)=>{
    const name=event.target.value
    setstate(name)
  }
  const img=`https://source.unsplash.com/random/900x400/?${state} `
  return (<>
    <input  type="text" placeholder="search aything" value={state} onChange={Chang} ></input><br/><br/>
    <img  src={img} alt="jio 4G"></img>
    <h2>{state}</h2>
  <Menu/> 
  </>
  )
    
}
export default App;