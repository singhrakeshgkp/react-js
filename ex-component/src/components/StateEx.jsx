import React,{Component} from "react";

class StateEx extends Component{

    /* Task1 --> change message dynamicaly when anyone click on button 
       Task2---> design a counter program (solution is in counter.jsx file)*/
    constructor(){
        super()
        this.state= {
            msg: 'welcome, this is state example'
        }
    }

    changeMessage(){
        this.setState({
            msg: 'new message'
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={()=>this.changeMessage()}>change message</button>
            </div>
        )
    }
}
export default StateEx