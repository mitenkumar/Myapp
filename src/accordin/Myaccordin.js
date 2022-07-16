import { useState } from "react";
import Button from '@mui/material/Button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Myaccordian=({question,answer})=>{
    const[datashow,showdata]=useState(false);

    return (<>
    
<div>
    <h3>
    <Button color="secondary" onClick={()=>showdata(!datashow)}>{datashow?"-":"+"}</Button>
    {question}<br></br>
    
    {datashow && <> <p> <AutoAwesomeIcon/>  {answer}</p> <hr/></>}

    </h3>
</div>

    </>)
}
export default Myaccordian;