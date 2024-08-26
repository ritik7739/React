import { useState } from "react";
import {v4 as uuidv4} from "uuid";
export default function TodoList(){
    let[todos,setTodos]=useState([{task:"sample Task",id:uuidv4(),isdone:false}])
    let[newTodo,setNewtodo]=useState("");

    let addNewTask=()=>{
     setTodos((prevTask=>{
          return([...prevTask,{task:newTodo,id:uuidv4(),isdone:false}]);
     }));
     setNewtodo("");
    };
    
    let updateTodoValue=(event)=>{
        setNewtodo(event.target.value)
    };
    
    let deleteTodoTask=(id)=>{
        setTodos(todos.filter((todo)=>todo.id!==id));
    };
    
    let UpperCaseAll=()=>{
        setTodos((prevTodos)=>prevTodos.map((todo)=>{
            return{
                ...todo,
                task:todo.task.toUpperCase(),
            };
        }));
    }
    let MarkAsDoneOne=(id)=>{
        setTodos((prevTodos)=>prevTodos.map((todo)=>{
            if(todo.id==id){
                return{
                    ...todo,
                    isdone:true,
                }
            }else {
                    return todo;
            }

            }));
    }

    let MarkAsDoneAll=()=>{
        setTodos((prevTodos)=>prevTodos.map((todo)=>{
            return{
                ...todo,
                isdone:true,
            };
        }))};

    return(
        <div>
            <input 
            placeholder="Add a Task"
            value={newTodo}
            onChange={updateTodoValue}
            ></input>
            <br></br> {/*next Line space tag */}
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>   {/*Line BREAK */}
            <h4>Task Todo</h4>
            <ul>
                {todos.map((todo)=>(
                   <li key={todo.id} >
                    <span style={{ textDecoration: todo.isdone ? "line-through" : "none" }}>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={()=>deleteTodoTask(todo.id)}>Delete</button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={()=>MarkAsDoneOne(todo.id)} >Mark as done</button>   
                    </li>
                ))}
            </ul>
            <button onClick={MarkAsDoneAll}>Mark all done</button>   
        </div>
    )
}