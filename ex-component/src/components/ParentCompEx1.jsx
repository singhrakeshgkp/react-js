import React,{Component} from "react";
import ChildComponentEx1 from "./ChildCompEx1";


class ParentCompEx1 extends Component{
    constructor(props){
        super(props)
        this.state={
            parentCompName:"parent component"
        }
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