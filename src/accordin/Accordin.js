import { react,useState } from "react";
import { questions } from "./Api";
import Myaccordian from "./Myaccordin";
const Accordin=()=>{
    const [data,showdata]=useState(questions);

    return (<>
    
    {data.map((event)=>{
        {/* const {id}=event; */}
            return <Myaccordian key={event.id} {...event}/>
    })}
    </>)
}
export default Accordin;
    