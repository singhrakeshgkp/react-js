import React from "react";
import './style.css'

function ConditionalCssStyleSheetsEx(props){
    let className = props.isPrimary?'primary':''
    return (
    <div>
       <h1 className={className}> ConditionalCssStyleSheetsEx:- Hello world</h1>
       <h1 className={`${className} large-font`}> ConditionalCssStyleSheetsEx:- Hello world</h1>
        </div>
    )
}

export default ConditionalCssStyleSheetsEx