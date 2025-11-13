import React, {Component} from "react";


/* approach 3- Binding event handler in constructor instead of render method, this is recommended way to bind 
   approach 4- Using arrow function*/
class BindEventHandlerEx2 extends Component{
    constructor(props){
        super(props)
        this.state= {
            msg:"welcome to bindeventhandler ex2"
        }
        /* approach 3 */
       // this.onClickEventHandler = this.onClickEventHandler.bind(this)
    }

    /* onClickEventHandler(){
        this.setState({
            msg:"thanks for joining event handler binding session"
        })
    } */

    /* approach 4 */
    onClickEventHandler = ()=>{
        this.setState({
            msg:"thanks for joining event handler binding session approach4"
        })
    }
    render(){
        return(
            <div>
                <div>This is bind event handler ex2 :- {this.state.msg}</div>
                <button onClick={this.onClickEventHandler.bind()}>change msg</button>
            </div>
        )
    }
}

export default BindEventHandlerEx2