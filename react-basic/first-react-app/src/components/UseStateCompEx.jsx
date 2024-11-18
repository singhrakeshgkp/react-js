import React, {useState} from "react";
function UseStateCompEx(){
    // we pass variable and its setter function name to useState hook, here default value is "Guest", if we don't pass any thing then default value will be blank string
    const [empName, setEmpName] = useState("Guest");
    const updateName = ()=>{
        setEmpName("Rakesh Singh");
    }
    return (
        <div><p>Employee Name : {empName}</p>
        <button onClick={updateName}>Change Employee Name</button>
        </div>
    );
}

export default UseStateCompEx