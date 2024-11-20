import React, {useState,createContext} from "react";
import ComponentY from "./ComponentY";

export const EmployeeContext = createContext();


function ComponentX(){
    const[employee,setEmployee] = useState("Rakesh");
    return (
    <div className="container"> 
        <h1>ComponentX</h1>
        <h3>{`Welcome ${employee}`}</h3>
        <EmployeeContext.Provider value ={employee}>
        <ComponentY></ComponentY>
        </EmployeeContext.Provider>
    </div>
);
}

export default ComponentX