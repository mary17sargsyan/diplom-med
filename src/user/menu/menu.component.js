import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import  {Food} from "../food/food.component";
import  {Workout} from "../workout/workout.component";
import {History} from "../history/history.component";
import  {Recommendations} from "../recommendations/recommendations.component";


export class Menu extends Component {
    render() {
        return (
            <Router>
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <div >

                        <Route exact path="/" component={Food} />
                        <Route path="/workout" component={Workout} />
                        <Route path="/recommendations" component={Recommendations} />
                        <Route path="/history" component={History} />
                    </div>
                </div>
            </Router>
        );
    }
}