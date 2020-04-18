import React, { Component } from 'react';

class Addemp extends Component{

    state={
        name:'',
        email:'',
        salary:''
    }
    
    

    handleChange=(e)=>{
       
            this.setState({
                [e.target.id]:e.target.value
            })
        
        
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();

        if(this.state.name==="" || this.state.mobile==="" || this.state.email===""){
            this.setState({
                name:'Enter Correct Value',
                email:'Enter Correct Value',
                salary:'Enter Correct Value'
            })
        }
        else{
            this.props.addEmp(this.state)
            this.setState({
                 name:'',
                 email:'',
                 salary:''
             })
        }
      
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
                    <input type="text" maxLength="5" id="salary" pattern="[0-9]*" onChange={this.handleChange} value={this.state.salary}/>
                    </label>
                   <button className="waves-effect waves-light btn-small add-button-class"  type="submit">add</button>
                </form>
            </div>
        )
    }
}

export default Addemp