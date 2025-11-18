import React,{useState,useEffect} from "react";

/* Task--> mimic componentWillUnmount-> we are doing this to perform cleanup ex remove eventlistener */
function HooksFunComp(){
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const trackMousePosition = e => {
        
        setX(e.clientX)
        setY(e.clientY)
        console.log('mouse event')
    }
    useEffect(() => {
        console.log('Use effect called')
       window.addEventListener('mousemove',trackMousePosition)
       // it can return another function
       return () => {
        console.log('component unmounting code')
        window.removeEventListener('mousemove',trackMousePosition)
       }
    },[]) // if we move the mouse on page this useEffect will be called multiple times, if we want to call it once just pass empty array[]

    return (
        <div>
            <h3>Cordinate using FunComp</h3>
            <div>X - {x}, Y - {y}</div>. 
          
        </div>
    )
}

export default HooksFunComp