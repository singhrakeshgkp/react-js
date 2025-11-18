import React,{useState,useEffect} from "react";

/* Task--> mimic componentDidMount using useState and useEffect hooks */
function HooksFunComp(){
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const trackMousePosition = e => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log('Use effect called')
       window.addEventListener('mousemove',trackMousePosition)
    },[]) // if we move the mouse on page this useEffect will be called multiple times, if we want to call it once just pass empty array[]

    return (
        <div>
            <h3>Cordinate using FunComp</h3>
            <div>X - {x}, Y - {y}</div>. 
          
        </div>
    )
}

export default HooksFunComp