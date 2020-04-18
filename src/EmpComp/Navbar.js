import React, { Component } from 'react';
import {Link} from 'react-router-dom'
const Navbaremp =(props)=>{

    return(
        <div>
            <nav>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><Link to="/EmployeeDirectory">Add Employee data</Link></li>
                        <li><Link to="/view">View Employee data</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
        )

}

export default Navbaremp