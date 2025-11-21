import React, { useState } from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";

function ParentComp(){

    const [age, setAge] = useState(22)
    const [name,setName] = useState('rakesh')
    const updateName = () => {
        setName(name+' singh')
    }
    const incAge = () => {
        setAge(age+2)
    }
    return (
        <div>
            <Title></Title>
            <Count text = 'age' count={age}></Count>
            <Button handleClick={incAge}>Increment Age</Button>
            <Count text = 'name' count={name}></Count>
            <Button handleClick={updateName}>update name</Button>
        </div>
    )
}

export default ParentComp