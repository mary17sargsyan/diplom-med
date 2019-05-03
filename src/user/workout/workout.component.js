import React, { Component } from 'react';
import {TopHeader} from '../shared/top-header.component';
import '../style.css';

export  class Workout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            durationMin: '',
            durationHour: '',
            weight: '',
            exercise: ''
        };

        this.handleChangeDurationMin = this.handleChangeDurationMin.bind(this);
        this.handleChangeDurationHour = this.handleChangeDurationHour.bind(this);
        this.handleChangeWeight = this.handleChangeWeight.bind(this);
        this.handleChangeExercise = this.handleChangeExercise.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
        handleChangeDurationMin(event) {
            this.setState({durationMin: event.target.value});
        }
        handleChangeDurationHour(event) {
            this.setState({durationHour: event.target.value});
        }

        handleChangeWeight(event) {
            this.setState({weight: event.target.value});
        }

        handleChangeExercise(event) {
            this.setState({exercise: event.target.value});
        }



    handleSubmit(event) {

        console.log( this.state.durationHour);
        console.log(this.state.durationMin);
        console.log(this.state.weight);
        console.log(this.state.exercise);


        event.preventDefault();
    }


    render() {
        return (
            <div>
                <TopHeader/>
                <br/>

                <div className="grayBack">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Your Exercise :
                        </label>
                        <select name="exercise" value={this.state.exercise} onChange={this.handleChangeExercise}>
                            <option value=" "> </option>
                            <option value="danceing">Dansing</option>
                            <option value="walking">Walking</option>
                            <option value="runing"> Runing</option>
                            <option value="gym">Gym</option>
                            <option value="yoga">Yoga</option>
                            <option value="stretch">Body Stretch</option>

                        </select>

                        <label>
                            Current Weight :
                        </label>
                        <input name="weight" type="number" placeholder="Weight" value={this.state.weight}
                               onChange={this.handleChangeWeight}/><br/>
                        <label>
                            Duration :
                        </label>

                        <div className="duration">
                            <input name="durationtHour" type="number" placeholder="Hr(s)" value={this.state.durationHour}
                                   onChange={this.handleChangeDurationHour}/>
                            <input name="durationtMin" type="number" placeholder="Min(s)" value={this.state.durationMin}
                                   onChange={this.handleChangeDurationMin}/>

                        </div>

                        <input type="submit" value="Add"/>


                    </form>

                </div>
            </div>
        );
    }
}