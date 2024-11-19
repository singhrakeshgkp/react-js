import React, {useState} from "react";
function TodaysTasks(){
    const [tasks, setTasks]= useState(["Read Core java","Read Interview Questions"]);
const [newTask, setNewTask]= useState("");

function addTaskHandler(){
   if(newTask.trim() !== ""){
    setTasks(t=>[...t,newTask]);
    setNewTask("");
   }
    
}

function removeTaskHandler(index){
    const updatedTask = tasks.filter((_,i)=> i !== index);
    setTasks(updatedTask);
}

function inputChangeHandler(event){
 setNewTask(event.target.value);
}
function moveTaskUp(index){
    if(index>0){
        const updatedTask = [...tasks];
        //swaping elements
        [updatedTask[index],updatedTask[index-1]] = [updatedTask[index-1],updatedTask[index]]
        setTasks(updatedTask)
    }
}

function moveTaskDown(index){
    if(index< tasks.length - 1){
        const updatedTask = [...tasks];
        //swaping elements
        [updatedTask[index],updatedTask[index+1]]= [updatedTask[index+1],updatedTask[index]]
        setTasks(updatedTask)
    }
}
return (<div>
    <h1 className="to-do-list"> Todays Tasks</h1>
    <div>
        <input type="text" placeholder="please enter a task" value={newTask} onChange={inputChangeHandler}></input>
    <button 
       className="add-btn"
        onClick={addTaskHandler}>
        Add Task
    </button>
    </div>
    <ol>
       {tasks.map((task,index)=> 
       <li key={index}>
        <span className="text">{task}</span>
        <button
         className="delete-btn"
         onClick={()=>removeTaskHandler(index)}>
         Delete task
        </button>
        <button
         className="move-btn"
         onClick={()=>moveTaskUp(index)}>👆
        </button>  
        <button
         className="move-btn"
         onClick={()=>moveTaskDown(index)}>👇
        </button>        

       </li>
    )} 
    </ol>
</div>);

}

export default TodaysTasks