import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import {Login} from "./login/login.component";
import  {Register} from "./register/register.component";

import './style.css';

export  class Home extends Component {
  render() {
    return (

        <div>

            <div className="header">
                <p> EVERYDAY   <img src={'./img/logo.png'} alt="qay" /><b> HEALTH </b></p>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Router>

                <div className="divLogReg">
                    <Route exact path="/" component={Login} />
                    <Route path="/register" component={Register} />
                </div>
                </Router>
            </div>

            </div>



    );
  }
}


