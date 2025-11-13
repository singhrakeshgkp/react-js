import React,{Component} from "react";

function ChildComponentEx1(props){
    return (
        <div>
            {/* <button onClick={props.childHandler}>Greet Parent</button>   issue with this is we can not pass, to pass parameter we can use below approach*/}
            <button onClick={()=>props.childHandler('from child component')}>Greet Parent</button>
        </div>
    )
}
export default ChildComponentEx1