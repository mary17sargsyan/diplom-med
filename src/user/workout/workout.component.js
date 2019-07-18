import React, {Component} from 'react';
import {TopHeader} from '../shared/top-header.component';
import './style.css';
export class Workout extends Component {

    render()
    {

        const day1 = [
            {work: 'Chest – Barbell Bench Press – 4 sets of 8 reps'},
            {work: 'Back – Lat-pulldowns – 4 sets of 10 reps'},
            {work: 'Shoulders – Seated Dumbbell Press – 4 sets of 10 reps'},
            {work: 'Legs – Leg Extensions – 4 sets of 10 reps'},
            {work: 'Biceps – Barbell Bbicep Curls – 3 sets of 10 reps'},
            {work: 'Triceps – Triceps Rope Pushdowns – 3 sets of 15 reps'}


        ];
        const day2 = [
            {work:'Legs – Leg Press Machine – 4 sets of 8 reps'},
            {work:'Triceps – Overhead Bar Extensions – 3 sets of 20 reps'},
            {work:'Biceps – EZ Bar Curls – 4 sets of 10 reps'},
            {work:'Chest – Machine Chest Press – 4 sets of 10 reps'},
            {work:'Back – T-Bar Row – 4 sets of 10 reps'},
            {work:'Shoulders – Lateral Raises – 3 sets of 20 reps'}

        ];
        const arrMeals = day1.map((work, index) => (

                <li>{work.work}</li>

        ));
        const day = day2.map((work, index) => (

            <li>{work.work}</li>

        ));


        return (

            <div>
                <TopHeader/>
                <br/>

                <div className="grayBack">
                    <h1> The workout is choosed based on your body index</h1>
                    <br/>
    <div className="inLine">
                    <ul className="reacommended1">
                        {arrMeals}
                    </ul>
                    <ul className="reacommended1">
                        {day}
                    </ul>

    </div>
                </div>

            </div>

        );
    }
}