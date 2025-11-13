import React,{Component} from "react";
import Student from "./Student";
function Students(){
    const students = [
  { name: "Ritesh", age: 18, grade: "A" },
  { name: "Aryan", age: 17, grade: "B" },
  { name: "Mayank", age: 19, grade: "A-" },
  { name: "Sandeep", age: 18, grade: "C+" }
];
const data = students.map(student=><Student student={student}></Student>)
return <div>{data}</div>
}

export default Students