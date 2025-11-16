import React,{Component} from "react";

class StudentForm extends Component{

    constructor(){
        super()
        /* step 1.  create one ref property
        step 2 attach this ref to input field in render method 
        step 3. call focus method on inputref*/
        this.inputRef = React.createRef()
        /* using call back 
        1. step 1 initialize */
       /*  this.cbref = null
        this.setCbRef = element=>{
            this.cbref = element
        } */
    }
    
    componentDidMount(){
        /* approach 1- focusing input */
        this.inputRef.current.focus()
        console.log(this.inputRef) 
        /* approach 2 - focusing input */
        /* if(this.cbref){
            this.cbref.focus()
        } */

    }
    btnClickHadler=()=>{
        alert(this.inputRef.current.value)
    }
    render(){
        return(
           <div>
                <div>
                    <label>Student Name</label>
                    <input type="text" ref={this.inputRef}></input>
                  {/*   <input type="text" ref={this.setCbRef}></input> */}
                  <button onClick={this.btnClickHadler}>Click</button>
                </div>
               
                </div>
        )
    }
}

export default StudentForm