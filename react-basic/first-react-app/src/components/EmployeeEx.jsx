import React, {useState} from "react";
function EmployeeEx(){
    // we pass variable and its setter function name to useState hook, here default value is "Guest", if we don't pass any thing then default value will be blank string
    const [employee, setEmployee] = useState({
        salary:50000,
        name: "Rakesh Singh",
        address: "Gorakhpur Uttar Pradesh"
    });
    function handleNameChange(e){
    /* case 1 below line will create new emp object and set only name, it will not retain existing properties
     setEmployee({name: "Rakesh Kumar"});
     */
    /* case 2 to overcome above issue we can use "...." spread operator, to spread properties.
    setEmployee({...employee,name: e.target.value});
    */
    /* case 3 to overcome above issue we can use "...." spread operator.
    setEmployee({...employee,name: e.target.value});
    */
    /*
    case 4 issue with above case is it modify the current state of employee object
    but rather make a reference to the previous state, this allow safe update.
    */
    setEmployee(emp => ({...emp,name: e.target.value}));
    }
    function handleSalaryChange(e){
        setEmployee(emp=>({...emp,salary: e.target.value}));
    }
    function handleAddressChange(e){
        setEmployee(emp=>({...emp,address: e.target.value})); 
    }
    return (
        <div>
        <p>Employee detail is : {employee.name} {employee.salary} {employee.address}</p>
       <input type="text" value={employee.name} onChange={handleNameChange}></input>
       <input type="number" value={employee.salary} onChange={handleSalaryChange}></input>
       <input type="text" value={employee.address} onChange={handleAddressChange}></input>
        </div>
    );
}

export default EmployeeEx