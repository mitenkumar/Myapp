import { Button } from '@mui/material'
import React, { useState } from 'react'

const Increment=()=>  {
const [state,setstate]=useState(0);
const click=()=>{
    setstate(state+1);
}
const change=()=>{
    setstate(state-1);
}
  return (
    <>
    <h1>
   <Button onClick={click} >+</Button></h1>
   <Button onClick={change} >-</Button>
   <h2>{state}</h2>
  
    </>
  )
}

export default Increment;