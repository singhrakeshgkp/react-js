function List(){
    const allowedDevices = ["Mobile","Laptop","Watch","Pen Drive"];
    allowedDevices.sort()// this will sort ascending order
    allowedDevices.sort().reverse();// will sort in descending order
    const listItem = allowedDevices.map(device => <li key = {device}>{device}</li>);
   
    // return (<ol>{listItem}</ol>);
   //Un Ordered list
   return (<ul>{listItem}</ul>)

}
export default List