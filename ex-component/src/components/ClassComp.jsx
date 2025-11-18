import React,{Component} from "react";
class ClassComp extends Component{
    constructor(props){
        super(props)
        this.state = {
            x : 0,
            y: 0
        }
    }

    trackMousePosition = e => {
        this.setState({x: e.clientX, y: e.clientY})
    }
    componentDidMount(){
        console.log('class component mounted')
        window.addEventListener('mousemove',this.trackMousePosition)
    }

    componentWillUnmount(){
     window.removeEventListener('mousemove',this.trackMousePosition) //cleanup, removed eventListner
      console.log("class component unmounted")
    }

    render(){
        return(
            <>
            <h3>class component</h3>

            <div>X- {this.state.x}, Y- {this.state.y}</div>
            </>
            
        )
    }
}

export default ClassComp