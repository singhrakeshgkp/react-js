import React, {useState} from "react";
import HooksFunComp from "./HooksFunComp";
import ClassComp from "./ClassComp";
function Container(){
    const [display,setDisplay] = useState(true)
    return(
        <div>
            <button onClick={()=>setDisplay(!display)}> Toggle display </button>
            {/* {display && <ClassComp/>} */}
             {display && <HooksFunComp/>}
        </div>
    )
}
export default Container