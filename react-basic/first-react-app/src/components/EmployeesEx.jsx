import React, {useState} from "react";
function EmployeesEx(){

    const [employees, setEmployees] = useState(["Rakesh Singh","Amit Kumar","Suryadev Singh"]);
    function addEmployee(){
        const empName = document.getElementById("empInput").value;
        document.getElementById("empInput").value="";
        setEmployees(e=>[...e,empName]);//... spread operator to copy existing value.


    }

    function deleteEmployee(index){
       // setEmployees(employees.filter((e,i) => i !=index));
       // e can be replaced with '_' cahr if not being used. this is best practice
        setEmployees(employees.filter((_,i) => i !=index));
    }
    return (
        <div>
        <h3>Employees</h3>
        <ul>
            {employees.map((empName,index)=> <li key={index} onClick={()=>deleteEmployee(index)}>{empName}</li>
            )}
        </ul>
        <input type="text" id = "empInput" placeholder="Please Enter Employee Name"></input>
        <button onClick={addEmployee}>Add Employee</button>
        </div>
    );
}

export default EmployeesEx