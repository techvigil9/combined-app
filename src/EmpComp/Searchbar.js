import React, { Component } from 'react';

class Searchbar extends Component{

    
    
    handleChange=(e)=>{
        this.props.filterEmp(
            e.target.value
        )
    }

    
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.reset_Search()
        this.refs.fieldName.value="";
    }

    render(){
        return(
            <div className="addtodo">
                <form onSubmit={this.handleSubmit}>
                   <input ref="fieldName" type="text" onChange={this.handleChange} />
                    <button className="waves-effect waves-light btn-small add-button-class"  type="submit">reset</button>
                </form>
            </div>
        )
    }

}

export default Searchbar