import React,{Component} from "react";

class ClickEventClassEx extends Component{
     clickEvent(){
        console.log("class component- click event")
    }
    render(){
        return (
            <div>
                <button onClick={this.clickEvent}>click-class comp</button>
            </div>
        )
    }
}

export  default ClickEventClassEx