import React, {Component} from "react";
class BindEventHandlerEx1 extends Component{
    constructor(props){
        super(props)
        this.state = {
            msg: "welcome to session"
        }
    }
    clickEventHandler(){
        this.setState({
            msg: "thanks for joining session"
        }) 

            console.log("test")
    }
    render(){
        return(
            <div>
                <div>Bind event handler example:- {this.state.msg}</div>
                 {/* <button onClick={this.clickEventHandler}>change message</button> -- without event binding event handler will give error*/} 
                 {/* <button onClick={this.clickEventHandler.bind(this)}>change message</button> Approach 1- binding in render method*/}
                   <button onClick={()=>this.clickEventHandler()}>change message</button>  {/* approach 2- using arrow function in render method */}
            </div>
        )
    }
}

export default BindEventHandlerEx1