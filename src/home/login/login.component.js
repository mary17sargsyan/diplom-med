import React, {Component} from 'react';
import {TopHeader} from '../shared/top-header.component';

import './loginStyle.css';

export class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',

        };

        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    handleChangeUserName(event) {
        this.setState({userName: event.target.value});

    }

    handleSubmit(event) {
        console.log('userName: ' + this.state.userName);
        console.log('password: ' + this.state.password);
        event.preventDefault();
    }

    render() {

        return (
            <div>
                <TopHeader/>
                <br/>
                <br/>
                <br/>
                <div className="log">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            User Name
                        </label>
                        <br/>
                        <input name="userName" type="text" value={this.state.userName}
                               onChange={this.handleChangeUserName}/>
                        <label>
                            Password
                        </label>
                        <br/>
                        <input name="password" type="password" value={this.state.password}
                               onChange={this.handleChangePassword}/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>

        );
    }
}