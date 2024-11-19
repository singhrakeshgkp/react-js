import React, {useState} from "react";
function EmployeesEx(){

    const [employees, setEmployees] = useState([]);
    const [name,setName] = useState("");
    const [salary, setSalary] = useState(0);
    const [address,setAddress] = useState("");
    
    function addEmployee(){
        const newEmp = {name: name,salary: salary,address: address};
        setEmployees(e=>[...e,newEmp]);
        //after adding/submitting form reset value
        setName("");
        setSalary(0);
        setAddress("");
    }
    function deleteEmployee(index){
        setEmployees(employees.filter((_,i) => i !=index));
    }
    
    function salaryChangeHandler(event){
        setSalary(event.target.value);
    }
    function nameChanngeHanler(event){
        setName(event.target.value);
    }
    function addressChangeHandler(event){
        setAddress(event.target.value);
    }
    
    return (
        <div>
        <h3>Employees</h3>
        <ul>
            {employees.map((emp,index)=> <li key={index} onClick={()=>deleteEmployee(index)}>{emp.name} {emp.salary} {emp.address}</li>
            )}
        </ul>
        <input type="text" value={name} onChange={nameChanngeHanler} placeholder="Please Enter Name"></input>
        <input type="number" value={salary} onChange={salaryChangeHandler} placeholder="Please Enter Salary"></input>
        <input type="text" value ={address} onChange={addressChangeHandler} placeholder="Please Enter Address"></input>
        <button onClick={addEmployee}>Add Employee</button>
        </div>
    );
}

export default EmployeesEx