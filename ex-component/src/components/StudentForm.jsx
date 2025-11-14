import React,{Component} from "react";

class StudentForm extends Component{
    constructor(props){
        super(props)
        this.state={
            studentName: '',
            about: '',
            gender:''
        }
    }

     handleStudentNameChange = (event)=>{
        this.setState({
            studentName: event.target.value
        })
    }

   handleAboutChange=(event)=>{
    this.setState({
        about: event.target.value
    })
   } 

   handleGenderChange=(event)=>{
    this.setState({
        gender: event.target.value
    })
   }

   handleSubmit=event=>{
    alert(`${this.state.studentName},${this.state.about}, ${this.state.gender}`)
    event.preventDefault()
   }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Student Name</label>
                    <input type="text" value={this.state.studentName} onChange={this.handleStudentNameChange}></input>
                </div>
                <div>
                    <label>About student</label>
                    <textarea value={this.state.about} onChange={this.handleAboutChange}></textarea>
                </div>
                <div>
                    <label>Gender</label>
                    <select value={this.state.gender} onChange={this.handleGenderChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default StudentForm