import React, {Component} from 'react';
import './regStyle.css';
import {TopHeader} from '../shared/top-header.component';


export class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            eMail: '',
            passwordRepeat: '',
            password: ''
        };

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangePasswordRepeat = this.handleChangePasswordRepeat.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeSelectGender = this.handleChangeSelectGender.bind(this);
        this.handleChangeWeight = this.handleChangeWeight.bind(this);
        this.handleChangeHeight = this.handleChangeHeight.bind(this);
        this.handleChangeAbout = this.handleChangeAbout.bind(this);
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

    handleChangeMail(event) {
        this.setState({eMail: event.target.value});
    }
    handleChangeDate(event) {
        this.setState({date: event.target.value});
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
    handleChangeAbout(event) {
        this.setState({about: event.target.value});
    }

    handleSubmit(event) {
        console.log('lastName: ' + this.state.lastName);
        console.log('firstName: ' + this.state.firstName);
        console.log('eMail: ' + this.state.eMail);
        console.log('password:' +this.state.password);
        console.log('passwordRepeat:' + this.state.passwordRepeat);
        console.log('date: ' + this.state.date);
        console.log('gender: ' + this.state.selectGender);
        console.log('weight: ' + this.state.weight);
        console.log('height: ' + this.state.height);
        console.log('about: ' + this.state.about);


        event.preventDefault();
    }

    render() {

        return (
            <div>
                <TopHeader/>
                <br/>
                <br/>
                <br/>
                <div className="divForRegForm">

                    <form onSubmit={this.handleSubmit}>
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
                            <input name="eMail" type="text" value={this.state.eMail} onChange={this.handleChangeMail}/>

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
                                Date of Birth :
                            </label>
                            <br/>
                            <input name="date" type="date" min="1930-01-01" max="2010-01-01" value={this.state.date}
                                   onChange={this.handleChangeDate}/>
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
                            <select name="about" value={this.state.about} onChange={this.handleChangeAbout}>
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






































