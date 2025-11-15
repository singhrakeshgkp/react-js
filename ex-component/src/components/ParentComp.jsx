import React  from "react";
import RegularComponent from "./RegularComponent";
import PureComp from "./PureComp";

class ParentComp extends React.Component{

    constructor(props){
        super(props)
        this.state= {
            topic: 'react js'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                topic: 'react js'
            })
        },2000)
    }
    render(){

        console.log('*************** rendering parent component **************')
        return (
            <>
            <h1>Parent Component</h1>
            <RegularComponent topic = {this.state.topic}></RegularComponent>
            <PureComp topic={this.state.topic}></PureComp>
            </>
        )
    }
}

export default ParentComp