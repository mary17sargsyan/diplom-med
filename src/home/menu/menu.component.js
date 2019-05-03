import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";



import {Login} from "../login/login.component";
import  {Register} from "../register/register.component";
import  {About} from "../about/about.component";


export class Menu extends Component {
    render() {
        return (
            <Router>
                <div>
                    <br/>

                    <div >

                        <Route exact path="/"  component={Login}  />
                        <Route path="/about"  component={About} />
                        <Route path="/register" component={Register} />

                    </div>
                </div>
            </Router>
        );
    }
}