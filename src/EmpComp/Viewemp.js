import React, { Component } from 'react';
import Searchbar from './Searchbar'
const Viewemp=({empArr, deleteEmp, editEmp, filterEmp, history,reset_search})=>{

     
      const emplist=empArr.length ? (empArr.map(emp=>{
        return(
        <div className="todolist-class" key={emp._id}>
            <span>
                <ul className="collection">
                <li className="collection-item avatar ">
                    <div >Name:  {emp.name}</div>
                    <div >Email: {emp.email}</div>
                    <div >Salary: {emp.salary}</div>
                    <button  onClick={() => editEmpl(emp._id) } className="waves-effect waves-light btn-small button-class">Edit</button>
                    <button  onClick={() => deleteEmpl(emp._id) } className="waves-effect waves-light btn-small button-class">Delete</button>
                </li>
                </ul>
            </span>
           
        </div>)
        })):(<p>No items in the list</p>);
     
   const deleteEmpl=(_id)=>{
        
        deleteEmp(_id);
        
        
    }

   const editEmpl=(id)=>{
        
        editEmp(id);
        history.push('/update');
    }

    const reset_Search=()=>{
        reset_search();
    }

  
    return(
            <div>
            <Searchbar reset_Search={reset_Search} filterEmp={filterEmp}/>
            <div>{emplist}</div>
            </div>
    )

}

export default Viewemp