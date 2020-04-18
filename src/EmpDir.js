import React, { Component, Fragment } from 'react';
import './App.css';
import Addemp from './EmpComp/addEmp'
import Editemp from './EmpComp/Editemp'
import Viewemp from './EmpComp/Viewemp'
import Navbaremp from './EmpComp/Navbar'
import axios from 'axios'
import {BrowserRouter, Route} from 'react-router-dom'
class EmpDir extends Component {

  state={
    empArr:[
],
    empAddstate:{_id:'', name:'',email:'', salary:''},

    empArr_Rendrd:[]
  }

  
  componentDidMount(){

      axios.get('api/employee/get')
      .then(res=>{
        const active_emp=res.data
        this.setState({
          empArr:active_emp,
          empArr_Rendrd:active_emp
        })
      })
  }
  
  addEmp=(emp)=>{
    //emp.id=Math.random();
    
    axios.post(`api/employee/create`,{
      "name":`${emp.name}`,
	    "status":1 ,
	    "age":23,
    	"salary":`${emp.salary}`,
    	"email":`${emp.email}`
    })
    .then(res=>{
      const empArr=[...this.state.empArr , res.data];
      this.setState({
        empArr:empArr,
        empArr_Rendrd:empArr
      })
    })
    /*this.setState({
      empArr:empArr,
      empArr_Rendrd:empArr
    })*/
 }

  deleteEmp=(id)=>{

    const empArr = this.state.empArr.filter(emp =>{
     return( emp._id !== id)
    });
    
    this.setState({
      empArr:empArr,
      empArr_Rendrd:empArr
    })

    axios.delete(`api/employee/delete/${id}`)
    .then(res => {
          console.log(res);
    })
  }

  updateEmp=(empl)=>{
    
    let empArr = this.state.empArr.filter(emp =>{
      return( emp._id !== empl._id)
     });

    empArr=[...empArr , empl];
    this.setState({
      empArr:empArr,
      empArr_Rendrd:empArr
    })

    axios.put(`api/employee/update/${empl._id}`,
    {"name":`${empl.name}`,
    "status":1 ,
    "age":23,
    "salary":empl.salary,
    "email":`${empl.email}`}
    )
    .then(res => {
          console.log(res);
    })
  }

  editEmp=(id)=>{
   
    
    let empEdit= this.state.empArr.filter(emp =>{
      return( emp._id === id)
     });
   

    this.setState({
      empAddstate:empEdit[0]
    })

   
}

filterEmp=(str)=>{
  let reg=new RegExp(str, 'gi');
  if(str!==''){
      const filterd_emplist=this.state.empArr_Rendrd.filter(emp=>{
          return(emp.name.match(reg))
      });
    
      this.setState({
        empArr_Rendrd:filterd_emplist
      })
  }

  else
  this.setState({
    empArr_Rendrd:this.state.empArr
  })
}

reset_search=()=>{

  this.setState({
    empArr_Rendrd:this.state.empArr
  })
}

  render() {
    return (
      <Fragment>
     <h4 className="heading">Employee Directory</h4>
     <BrowserRouter>
      <div className="container-class">
       <Navbaremp/>
       <Route exact path='/EmployeeDirectory' render={(props) => <Addemp {...props} addEmp={this.addEmp} empAddstate={this.state.empAddstate} />}/>
       <Route exact path='/update' render={(props) => <Editemp {...props} updateEmp={this.updateEmp} empAddstate={this.state.empAddstate} />}/>
       <Route exact path='/view'  render={(props) => <Viewemp {...props}  empArr={this.state.empArr_Rendrd} deleteEmp={this.deleteEmp} editEmp={this.editEmp} filterEmp={this.filterEmp} reset_search={this.reset_search} />} />
      </div>
      </BrowserRouter>
      </Fragment>
    );
  }
}

export default EmpDir;
