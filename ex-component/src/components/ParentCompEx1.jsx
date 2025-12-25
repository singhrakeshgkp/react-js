import { Component } from "react";
import ChildComponentEx1 from "./ChildCompEx1";


class ParentCompEx1 extends Component{
    constructor(props){
        super(props)
        this.state={
            parentCompName:"parent component"
        }

        /* 
        extends Component gives access to:
        1. this.props
        2. this.state
        3. lifecycle methods
        4. render()
         */
        this.callParent=this.callParent.bind(this)
    }

    callParent(callerName){
        alert(`hello ${this.state.parentCompName}  ${callerName}`)//since we are using keyword 'this' here, we need to bind this method
    }
    render(){
    return (
        <div>
         <ChildComponentEx1 childHandler={this.callParent}></ChildComponentEx1> {/* passing callParent method reference as prop called childHandler */}  
        </div>
        )
    }
}

export default ParentCompEx1