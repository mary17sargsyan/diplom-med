import React, {Component} from 'react';
import {TopHeader} from '../shared/top-header.component';
import '../style.css';
import axios from 'axios';

export class Food extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: '',
            gr: '',
            energy: ''
        };

        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleChangeGr = this.handleChangeGr.bind(this);
        this.handleChangeEnergy = this.handleChangeEnergy.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeGr(event) {
        this.setState({gr: event.target.value});
    }

    handleChangeType(event) {
        this.setState({type: event.target.value});
    }


    handleChangeEnergy(event) {
        this.setState({energy: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        let formData = new FormData();
        formData.append('type', this.state.type);
        formData.append('gr', this.state.gr);
        formData.append('energy', this.state.energy);

        axios({
            method: 'post',
            url: '/foodC.php',
            data: formData,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        })
            .then((response) =>{

                if (response.data.result === 'ok') {
                    this.setState({ station:'ok'});
                    alert('ok');

                }
                else {
                    this.setState({ station:'notOk'});
                    alert('notOK');

                }

            })

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
                    <form action="/food.php" onSubmit={this.handleSubmit}>
                        <label>
                            Type :
                        </label>
                        <br/>
                        <input name="type" type="text" value={this.state.type} onChange={this.handleChangeType}/>
                        <label>
                            Gr
                        </label>
                        <br/>
                        <input name="gr" type="number" value={this.state.gr} onChange={this.handleChangeGr}/>

                            <label>
                                Energy? :
                            </label>
                            <input name="energy" type="text" placeholder="energy" value={this.state.energy}
                                   onChange={this.handleChangeEnergy}/>


                            <input type="submit" value="Add"/>

                    </form>

                </div>
            </div>
    );
    }
    }