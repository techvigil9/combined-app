import React, { Component,Fragment } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Navigation from './Navigation'
import Todo from './Todo'
import EmpDir from './EmpDir'
class App extends Component {
  render() {
    return (
      <Fragment>
      <h4>React App</h4>
      <BrowserRouter>
       <div className="container-class-main">
        <Navigation/>
        <Route exact path='/' component={Todo}/>
        <Route exact path='/EmployeeDirectory'  component={EmpDir}/>
        </div>
       </BrowserRouter>
       </Fragment>
    );
  }
}

export default App;
