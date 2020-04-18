import React from 'react'
import foldericon from './foldericon.jpg'
const Todos= ({todos, deleteTodo, finishTodo}) => {

    const todolist=todos.length ? (todos.map(todo=>{
        return(
        <div className="todolist-class" key={todo._id}>
            <span>
                <ul className="collection">
                <li className="collection-item avatar ">
                    <img src={foldericon} alt="" className="circle"/>
                    <div className={todo.status===3?'tododone-class':null}>{todo.task}</div>
                     <button onClick={() => { finishTodo(todo._id) }} className="waves-effect waves-light btn-small button-class">Finished</button>
                    <button onClick={() => { deleteTodo(todo._id) }} className="waves-effect waves-light btn-small button-class">Delete</button>
                </li>
                </ul>
            </span>
           
        </div>)
        })):(<p>No items in the list</p>);

    return(
        <div>{todolist}</div>
    )
}

export default Todos