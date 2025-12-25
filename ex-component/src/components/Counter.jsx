import { Component } from "react"

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    increment(){
       // this.state.count=this.state.count+1 
       //we should never modify state directly above line  will not render the incremented counter value in DOM, however expected value will be printed on console
      /*  this.setState({
        count:this.state.count+1
       })
        console.log(this.state.count) */

        /* call to set state is asynchronous so counter on console will always be 1 less than value what we have on ui as console.log gets called before setting state.
        we can get rid of above issue using callback, setState can take two parameter one is state object and another is call back function */
        /* this.setState({
            count:this.state.count+1
        },()=>console.log("callback value ",this.state.count)) */

        /* Issue with above code if we want to increment by 3, counter value gets increment by 1 this is because react group multiple setState call into single
        update call for better performance. To get rid of this we can use below code snippet increment by 3
        Whenever we want to update state beased on previous-state we need to pass a function as an argument to setState method instead of object
        we can also pass props to setState as second parameter*/
        this.setState((prevState)=>({
            count:prevState.count+1
        }))


        
    }

    incrementBy3(){
        this.increment()
        this.increment()
        this.increment()
    }
    render(){
        return(
            <>
            <div>count - {this.state.count}</div>
            <button onClick={()=>this.increment()}>increment</button>
             <button onClick={()=>this.incrementBy3()}>increment by 3</button>
            </>
        )
    }
}

export default Counter