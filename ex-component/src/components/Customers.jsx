import React,{Component} from "react";
import Customer from "./Customer";
function Customers () {
   
       const customers = [
  {
    id: 1,
    name: "Alice Smith",
    email: "alice.smith@example.com",
    phone: "555-123-4567"
  },
  {
    id: 2,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phone: "555-987-6543"
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    phone: "555-555-1111"
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "diana.prince@example.com",
    phone: "555-777-2222"
  }
];
const customersElement = customers.map(customer=><Customer key={customer.email} customer={customer}></Customer>)
        return (
            <div>
                {customersElement}
            </div>
        )
    }

export default Customers