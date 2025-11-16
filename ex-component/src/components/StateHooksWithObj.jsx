import React,{useState} from "react";
function StateHooksWithObj(){
    const [studentName,setStudentName] = useState({firstName:'',lastName:''})
    return(
       <form>

{/*        <input type="text" value={studentName.firstName} onChange = { e => setStudentName({ firstName: e.target.value })}></input>
       <input type="text" value={studentName.lastName} onChange = { e => setStudentName({ lastName : e.target.value })}></input> 
        <h3>Student First Name :- {studentName.firstName}</h3>
        <h3>Student Last Name :- {studentName.lastName}</h3> 
        */}

        {/* Issue with above code if we start typing in first name, last name become undefined and vice versa. This is because
        useState hook doesn't automatically merge object like this.setState in calss component. We must manually merge the previous state using spread syntax */}

        <input type="text" value={studentName.firstName} onChange = { e => setStudentName({...studentName, firstName: e.target.value })}></input>
        <input type="text" value={studentName.lastName} onChange = { e => setStudentName({ ...studentName, lastName : e.target.value })}></input> 
        <h3>Student First Name :- {studentName.firstName}</h3>
        <h3>Student Last Name :- {studentName.lastName}</h3>


     <h2>{JSON.stringify(studentName)}</h2>
       </form>
    )
}

export default StateHooksWithObj