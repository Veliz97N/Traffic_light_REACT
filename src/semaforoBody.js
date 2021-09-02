import {useState} from "react";
const SemaforoBody = () => {
    
  const [color, setColor] = useState("red");

    
    
    return (  
        <div className="semaforo_body_container">
            <div className="semaforo_body">
                <div className={"red_light"+((color==="red")?" selected":"")}  onClick={()=>setColor("red")}  ></div>
                <div className={"yellow_light"+((color==="yellow")?" selected":"")}  onClick={()=>setColor("yellow")}></div>
                <div className={"green_light"+((color==="green")?" selected":"")}  onClick={()=>setColor("green")}></div>
            </div>

        </div>
    );
}
 
export default SemaforoBody;