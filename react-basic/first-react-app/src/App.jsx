import List from './components/List.jsx'
function App() {
  //array of employee object
  const ftEmployees = [
    {id:1, name:"Rakesh"},
    {id:4, name:"Mayank"},
    {id:2,name:"Sunil"},
    {id:3, name:"Ram"}
];

const contractor = [
  {id:51, name:"Ramesh"},
  {id:52, name:"Mahesh"},
  {id:53,name:"Suresh"},
  {id:54, name:"Ganesh"}
];
  return (
    <>
   <List employees={ftEmployees} category="FT"></List>
   <List employees={contractor} category="CONTRACTOR"></List>
  </>
  );
}

export default App
