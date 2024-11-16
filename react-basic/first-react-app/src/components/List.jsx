function List(){

    //array of employee object
    const employees = [
        {id:1, name:"Rakesh"},
        {id:4, name:"Mayank"},
        {id:2,name:"Sunil"},
        {id:3, name:"Ram"}
    ];
  employees.sort((emp1,emp2) => emp1.id - emp2.id) // this will sort ascending order
  employees.sort((emp1,emp2) => emp2.id - emp1.id)// will sort in descending order

  // sorting with emp name
  employees.sort((emp1,emp2) => emp1.name.localeCompare(emp2.name)); // asc
  employees.sort((emp1,emp2) => emp2.name.localeCompare(emp1.name)); // desc
   // apply filter
   const filteredEmp = employees.filter(emp => emp.id>2); 
    const empList = filteredEmp.map(emp => <li key = {emp.id}>{emp.name} &nbsp <b>{emp.id}</b></li>);
   
    
   return (<ul>{empList}</ul>)

}
export default List