import React, { Component } from 'react';

class Editemp extends Component{

    state={
        
        _id:this.props.empAddstate._id,
        name:this.props.empAddstate.name,
        email:this.props.empAddstate.email,
        salary:this.props.empAddstate.salary
    }
    
    
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
       this.props.updateEmp(this.state)

        this.setState({
            name:'',
            email:'',
            salary:''
        })
    }

    render(){

        return(
            <div className="app-container-class">
                <form onSubmit={this.handleSubmit}>
                    <label>
                     Name:
                    <input type="text" id="name" onChange={this.handleChange} value={this.state.name}/>
                    </label>
                    <label>
                     Email:
                    <input type="text" id="email" onChange={this.handleChange} value={this.state.email}/>
                    </label>
                    <label>
                     Salary:
                    <input type="text" id="salary" maxLength="5" pattern="[0-9]*" onChange={this.handleChange} value={this.state.salary}/>
                    </label>
                   <button className="waves-effect waves-light btn-small add-button-class"  type="submit">update</button>
                </form>
            </div>
        )
    }
}

export default Editemp