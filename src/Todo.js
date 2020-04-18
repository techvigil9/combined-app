import React, { Component, Fragment } from 'react';
import './App.css';
import Todos from './TodoComp/todos'
import Addtodo from './TodoComp/addTodo'
import axios from 'axios'

class Todo extends Component {

  state={
    todos:[]
  }

  componentDidMount(){
    axios.get('api/todo/get')
    .then(res=>{
        this.setState({
          todos:res.data
        })
    })
  }
  addTodo=(todo)=>{
    
    
axios.post(`api/todo/create`,{
      "task":`${todo.task}`,
	    "status":1
    })
    .then(res=>{
      let todos=[...this.state.todos , res.data];
      this.setState({
        todos:todos
      })
    })
  }

  deleteTodo=(id)=>{
    const todos = this.state.todos.filter(todo =>{
     return( todo._id !== id)
    });
    
    this.setState({
      todos:todos
    })

    axios.delete(`api/todo/delete/${id}`)
    .then(res => {
          console.log(res);
    })
  }

  finishTodo=(id)=>{
    const todos=this.state.todos.map(todo =>{
      if(todo._id===id && todo.status===1)
      {
        todo.status=3
      }
        return todo;
    });

    this.setState({
        todos:todos
      })
      
    axios.put(`api/todo/update/${id}`,
    {status:3}
    )
    .then(res => {
     
    })

   
  }
  render() {
    return (
      <Fragment>
      <h4 className="heading">Todo List</h4>
      <div className="container-class container">
        <div><Addtodo addTodo={this.addTodo}/></div>
        <div><Todos todos={this.state.todos} deleteTodo={this.deleteTodo} finishTodo={this.finishTodo}/></div>
       </div>
       </Fragment>
    );
  }
}

export default Todo;
