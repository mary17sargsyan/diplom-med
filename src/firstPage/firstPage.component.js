import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from './home/home.component';

import  {Header} from "./header/header-component";
import {Login} from "./login/login.component";
import  {Register} from "./register/register.component";

import './App.css';

export  class FirstPage extends Component {
  render() {
    return (
      <Router> 
        <div>
            <Header/>
            <br/>
            <br/>
            <br/>
            <div className="divLogReg">

                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </div>
        </div>
      </Router>
    );
  }
}


