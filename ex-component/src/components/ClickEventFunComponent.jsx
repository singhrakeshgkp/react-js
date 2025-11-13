import React from "react";

/* Task - Display one button and log message on console when anyone click on it */
function FunClick(){
    function clickHandler(){
        console.log("Button clicked event trigerred")
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunClick