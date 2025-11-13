import React from "react";
function Customer({customer}){
    return (
    <div>
        <h3>Customer Name :- {customer.name}, customer phone :- {customer.phone}</h3>
    </div>
    )
}

export default Customer