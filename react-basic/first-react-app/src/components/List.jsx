
function List(props){

    const category = props.category;
    const empList = props.employees;
    const empListItem = empList.map(emp => <li key={emp.id}>{emp.name}</li>)
    return (
    <>
    <h3 className = "emp-category">{category}</h3>
    <ul className="emp-items">{empListItem}</ul>
    </>
    
)

}
export default List