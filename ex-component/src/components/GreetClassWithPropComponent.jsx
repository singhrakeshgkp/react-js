import React, {Component} from "react"

class GreetClassWithPropComponent extends Component{
    render(){
       return <h3>this is class component with prop example prop value is :- {this.props.name}</h3>
    }
}

export default GreetClassWithPropComponent