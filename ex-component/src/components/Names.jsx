import React from "react";
function Names(){
   const names=['rakesh','suresh','rakesh'];
   const nameList = names.map((name,index)=><h1 key={index}> {index} {name}</h1>)
    return (
        <div>{nameList}</div>
    )
}

export default Names