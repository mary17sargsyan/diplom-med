import React, {Component} from 'react';
import {TopHeader} from '../shared/top-header.component';
import '../style.css';

export class Food extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: '',
            type: '',
            howMuch: ''
        };

        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleChangeHowMuch = this.handleChangeHowMuch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTime(event) {
        this.setState({time: event.target.value});
    }

    handleChangeType(event) {
        this.setState({type: event.target.value});
    }


    handleChangeHowMuch(event) {
        this.setState({howMuch

            : event.target.value});
    }

    handleSubmit(event) {


        alert("hii");
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <TopHeader/>
                <br/>
                <br/>
                <div className="grayBack">

                    <br/>
                    <br/>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Types of meal? :
                        </label>

                        <select name="exercise" value={this.state.time} onChange={this.handleChangeTime}>
                            <option value="empty"> </option>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner"> Meat and Fish</option>
                            <option value="supper">Supper</option>
                            <option value="snack">Snack</option>


                        </select>

                        <label>
                            Which kind of food do you eat?
                        </label>
                        <br/>
                        <input name="type" type="text" value={this.state.type} onChange={this.handleChangeType}/>

                            <label>
                                How much do you eat? :
                            </label>
                            <input name="howMuch" type="number" placeholder="Gr" value={this.state.howMuch}
                                   onChange={this.handleChangeHowMuch}/>


                            <input type="submit" value="Add"/>

                    </form>

                </div>
            </div>
    );
    }
    }