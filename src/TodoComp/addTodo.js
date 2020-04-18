import React, { Component } from 'react';

class Addtodo extends Component {
    
    state={
        task:""
    }
    handleChange=(e)=>{
        this.setState({
            task:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.state.task!==''?this.props.addTodo(this.state):alert("Enter some value");

        this.setState({
            task:''
        })
    }
    render(){
        return(
            <div className="addtodo">
                <form onSubmit={this.handleSubmit}>
                   
                    <input type="text" onChange={this.handleChange} value={this.state.task}/>
                    <button className="waves-effect waves-light btn-small add-button-class"  type="submit">add</button>
                </form>
            </div>
        )
    }
}

export default Addtodo