import React,{useState} from "react";

function StateHooksWithArrayObj(){

    const [numbers,setNumbers] = useState([])

    const addNumber = () => {
        setNumbers([ ...numbers, {
            id: numbers.length,
            value: Math.floor(Math.random() *10 ) + 1
        }])
    }
    return(
        <div>
            <button onClick={addNumber}>Add Number</button>
            <ul>
                {
                    numbers.map( num => (<li key = {num.id}>{num.value}</li>))
                }
            </ul>
        </div>
    )
}
export default StateHooksWithArrayObj