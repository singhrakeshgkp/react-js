import React from "react"

const GreetParameterized = (props)=>{
    console.log(props)
    return <h1>Parameterized functional component example {props.name} is {props.duration} course</h1>
}

export default GreetParameterized