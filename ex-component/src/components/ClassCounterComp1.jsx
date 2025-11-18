import React,{Component} from "react";
class ClassCounterComp1 extends Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState){
        document.title = `Clicked ${this.state.count}`
    }
    render(){
        return(
            <>
            <h3>Counter using class component</h3>
            <button onClick={() => this.setState({count: this.state.count+1})}> Click {this.state.count}</button>
            </>
            
        )
    }
}

export default ClassCounterComp1