import React, {Component} from 'react';
import './regStyle.css';
import {TopHeader} from '../shared/top-header.component';


export class Register extends Component {

    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: ' ',
            eMail: ' ',
            passwordRepeat: '',
            password: ' '
        };

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleChangePassword= this.handleChangePassword.bind(this);
        this.handleChangePasswordRepeat= this.handleChangePasswordRepeat.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeFirstName(event){
        this.setState({firstName: event.target.value});
    }
    handleChangeLastName(event){
        this.setState({lastName: event.target.value});
    }
    handleChangePassword(event){
        this.setState({password: event.target.value});
    }
    handleChangePasswordRepeat(event){
        this.setState({passwordRepeat: event.target.value});
    }
    handleChangeMail(event) {
        this.setState({eMail: event.target.value});
    }

    handleSubmit(event) {
        console.log('lastName: ' + this.state.lastName);
        console.log('firstName: ' + this.state.firstName);
        console.log('eMail: ' + this.state.eMail);
        console.log('password: ' + this.state.password);
        console.log('passwordRepeat: ' + this.state.passwordRepeat);

        event.preventDefault();
    }
    render(){

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


                            <input type="submit" value="Submit"/>
                        </div>

                    </form>
                </div>
            </div>

        );
    }
}






































