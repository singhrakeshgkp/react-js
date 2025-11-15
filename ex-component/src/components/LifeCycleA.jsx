import React, {Component} from "react";

class LifeCycleA extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'rakesh singh'
        }
        console.log('lifecycle A constructor')
    }


    static getDerivedStateFromProps(props, state){
        console.log('lifecycle A getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('lifecycle A :: componentDidMount test')
    }

    render(){
        console.log('lifecycle A render method called')
        return (
            <h1>LifecycleA- Mounting</h1>
        )
    }
}

export default LifeCycleA