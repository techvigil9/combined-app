import React, { Component } from 'react';
import {Link} from 'react-router-dom'
const Navigation =(props)=>{

    return(
        <div>
            <nav>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><Link to="/">Todo List</Link></li>
                        <li><Link to="/EmployeeDirectory">Employee Directory</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
        )

}

export default Navigation