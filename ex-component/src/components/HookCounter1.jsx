import React,{useState,useEffect} from "react";
function HookCounter1(){
    const [count,setCount] = useState(0)
    useEffect(() => {
        document.title = `you clicked ${count} times`
    })

    return (
        <div>
            <h3>Counter using State Hook</h3>
            <button onClick={() => setCount(count+1)}>Click {count}</button>
        </div>
    )
}

export default HookCounter1