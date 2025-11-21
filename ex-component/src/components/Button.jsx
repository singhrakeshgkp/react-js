import React from "react";

function Button({handleClick,children}){
    console.log('rendering button- ',children)
    return (
       <button onClick={handleClick}>
        {children}
       </button> 
    )
}

export default Button