import React, {useContext} from "react";
import { EmployeeContext } from "./ComponentX";
function ComponentZ(){
    const emp = useContext(EmployeeContext);

    return (
    <div className="container"> 
        <h1>ComponentZ</h1>
        <h3>{`Hi ${emp}`}</h3>
    </div>
);
}

export default ComponentZ