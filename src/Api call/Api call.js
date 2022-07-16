import React, { useState } from 'react';
import Api from "./Api"
const App =() => {
  const [state,setstate]=useState(Api)
  return (
     
    <>
      {
        state.map((elem)=>{
          const{id,name,price,info}=elem;
          return(
            <>

            <h1>{id}</h1>
            <h2>{name}</h2>
            <h3>{info}</h3>
            <h3>{price}</h3>
            </>
          )
           
          
        })
      }
    </>
    );
}

export default App;
