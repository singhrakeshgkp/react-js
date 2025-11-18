import React,{useState,useEffect} from "react";
function HookCounter1(){
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')
    useEffect(() => {
        console.log('Use effect -- updating title')
        document.title = `you clicked ${count} times`
    },[count])// passed second parameter array in that we have count, whenever count value changes code withing useEffect will gets executed

    return (
        <div>
            <h3>Counter using State Hook</h3>
            <input type="=text" value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={() => setCount(count+1)}>Click {count}</button>
        </div>
    )
}

export default HookCounter1