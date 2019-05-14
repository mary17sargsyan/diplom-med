import React, {Component} from 'react';
import './regStyle.css';
import {TopHeader} from '../shared/top-header.component';
import axios from 'axios';

export class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            passwordRepeat: '',
            password: '',
            weight: '',
            height: '',
            selectGender: '',
            age: '',
            goal:''
        };

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangePasswordRepeat = this.handleChangePasswordRepeat.bind(this);
        this.handleChangeAge= this.handleChangeAge.bind(this);
        this.handleChangeSelectGender = this.handleChangeSelectGender.bind(this);
        this.handleChangeWeight = this.handleChangeWeight.bind(this);
        this.handleChangeHeight = this.handleChangeHeight.bind(this);
        this.handleChangeGoal = this.handleChangeGoal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeFirstName(event) {
        this.setState({firstName: event.target.value});
    }

    handleChangeLastName(event) {
        this.setState({lastName: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    handleChangePasswordRepeat(event) {
        this.setState({passwordRepeat: event.target.value});
    }

    handleChangeUserName(event) {
        this.setState({userName: event.target.value});
    }
    handleChangeAge(event) {
        this.setState({age: event.target.value});
    }
    handleChangeSelectGender(event) {
        this.setState({selectGender: event.target.value});
    }
    handleChangeWeight(event) {
        this.setState({weight: event.target.value});
    }
    handleChangeHeight(event) {
        this.setState({height: event.target.value});
    }
    handleChangeGoal(event) {
        this.setState({goal: event.target.value});
    }

    handleSubmit(event) {

        event.preventDefault();
        let formData = new FormData();
        formData.append('userName', this.state.userName);
        formData.append('password', this.state.password);
        formData.append('passwordRepeat', this.state.passwordRepeat);
        formData.append('lastName', this.state.lastName);
        formData.append('firstName', this.state.firstName);
        formData.append('age', this.state.age);
        formData.append('weight', this.state.weight);
        formData.append('height', this.state.height);
        formData.append('selectGender', this.state.selectGender);
        formData.append('goal', this.state.goal);

        axios({
            method: 'post',
            url: '/register.php',
            data: formData,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        })
            .then((response) =>{
                console.log(response);
                if (response.data.result === 'ok') {

                        alert('ok');
                }
                else if(response.data.result === 'notOk') {
                    alert('qaq');


                }else if(response.data.result === 'error'){
                        alert('qaqaot');
                }

            })

    }

    render() {

        return (
            <div>
                <TopHeader/>
                <br/>
                <br/>
                <br/>
                <div className="divForRegForm">

                    <form  action="/register.php" onSubmit={this.handleSubmit}>
                        <div className="formDiv1">
                            <label>
                                First Name :
                            </label>
                            <br/>
                            <input name="firstName" type="text" value={this.state.firstName}
                                   onChange={this.handleChangeFirstName}/>
                            <label>
                                Last Name :
                            </label>
                            <br/>
                            <input name="lastName" type="text" value={this.state.lastName}
                                   onChange={this.handleChangeLastName}/>
                            <label>
                                E: mail :
                            </label>
                            <br/>
                            <input name="userName" type="text" value={this.state.userName} onChange={this.handleChangeUserName}/>

                            <label>
                                Password :
                            </label>
                            <br/>
                            <input name="password" type="password" value={this.state.password}
                                   onChange={this.handleChangePassword}/>
                            <label>
                                Please Repeat Password :
                            </label>
                            <br/>
                            <input name="passwordRepeat" type="password" value={this.state.passwordRepeat}
                                   onChange={this.handleChangePasswordRepeat}/>

                        </div>
                        <div className="formDiv2">
                            <label>
                                Age:
                            </label>
                            <br/>
                            <input name="age" type="number"  value={this.state.age}
                                   onChange={this.handleChangeAge}/>
                            <label>
                                Gender :
                            </label>
                            <select name="selectGender" value={this.state.selectGender} onChange={this.handleChangeSelectGender}>
                                <option value="Male">Male</option>
                                <option value="Female">Fimale</option>
    <br/>
                            </select>

                            <label>
                                Your weight and height :
                            </label>
                            <div className="wightHeight">
                                <input name="weight" type="number" placeholder="Height" value={this.state.weight}
                                       onChange={this.handleChangeWeight}/>
                                <input name="height" type="number" placeholder="Weight" value={this.state.height}
                                       onChange={this.handleChangeHeight}/>
                            </div>
                            <br/>
                            <label>
                                What's your goal ? :
                            </label>
                            <select name="goal" value={this.state.goal} onChange={this.handleChangeGoal}>
                                <option value="beHealthier">Be Healthier</option>
                                <option value="loseWeight ">Lose Weight</option>
                                <option value="gainWeight">Gain Weight</option>

                            </select>
                            <br/>

                            <input type="submit" value="Submit"/>
                        </div>

                    </form>
                </div>
            </div>

        );
    }
}






































