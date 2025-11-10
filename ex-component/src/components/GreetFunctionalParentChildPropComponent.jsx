import React from "react";

const GreetFunParentChild = (props)=>{
    return (
        <div>
            <h1>GreetFun Parent Child Component example</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default GreetFunParentChild