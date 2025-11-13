import React from "react"

function Student({student}){
    return (
        <div>
            <h3>{student.name} is {student.age} year old and he is in grade {student.grade}</h3>
        </div>
    )
}

export default Student