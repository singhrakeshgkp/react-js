import React,{useState,useEffect} from "react";

function IntervalHookCounter(){
    const [count,setCount] = useState(0)
    const tick = () => {
        setCount(count +1)
      //  setCount(prevCount => prevCount + 1)// this will work with empty [] what we pass to useEffectFunction
    }
    useEffect(() => {
        const interval = setInterval(tick,1000)// call tick after every second
        return () => {
            clearInterval(interval)
        }
    },[count])// if we don't pass count dependency it will not watch and counter will be shown 1

    return(
        <div>{count}</div>
    ) 
}

export default IntervalHookCounter