
import React, {Component} from 'react';
import {TopHeader} from '../shared/top-header.component';
import {FoodAnother} from './foodAnother.component';
import '../style.css';
import axios from 'axios';

export class Food extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: '',
            type: '',
            howMuch: '',
            station:''
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
        this.setState({howMuch: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData();
        formData.append('time', this.state.time);
        formData.append('type', this.state.type);
        formData.append('howMuch', this.state.howMuch);

        axios({
            method: 'post',
            url: '/foodSubmit.php',
            data: formData,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        })
            .then((response) => {
                if (response.data.result === 'ok') {
                    alert('ok');
                }
                else if(response.data.result === 'notOk') {
                    this.setState({station:'ok'});

                }else if(response.data.result === 'error'){
                    alert('error');
                }else if(response.data.result === 'inputError'){
                    alert('inputerror');
                }

            })

    }

    render() {
        if (this.state.station ==='') {
            return (
                <div>
                    <TopHeader/>
                    <br/>
                    <br/>
                    <div className="grayBack">

                        <br/>
                        <br/>
                        <br/>
                        <form action="/foodSubmit.php" onSubmit={this.handleSubmit}>
                            <label>
                                Types of meal? :
                            </label>

                            <select name="exercise" value={this.state.time} onChange={this.handleChangeTime}>
                                <option value="empty"></option>
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
                                How much do you eat?
                            </label>
                            <input name="howMuch" type="number" placeholder="Gr" value={this.state.howMuch}
                                   onChange={this.handleChangeHowMuch}/>


                            <input type="submit" value="Add"/>

                        </form>

                    </div>
                </div>
            );
        }else if(this.state.station==='ok'){
            return (
               <div>
                   <FoodAnother/>
               </div>
            );

        }
    }

}
