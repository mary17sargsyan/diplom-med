import React, { Component } from 'react';
import { TopHeader } from '../shared/top-header.component';

import './loginStyle.css';
 export class Login extends Component {

    constructor(props){
        super(props)
        this.state = {value: ' '}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            length : 0,
            timeInSeconds: 0,
            isSubmitted: false
        }
    }
    handleChange(event){

        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {

        this.setState({isSubmitted: true});

         event.preventDefault();
     }
    render(){

        return (
            <div>
                <TopHeader/>
                <br/>
                <br/>
                <br/>
                <div className="log">
                <form onSubmit={this.handleSubmit}>
                    <label for="userName">
                        User Name :
                    </label>
                        <br/>
                    <input name="userName" type="text" value = {this.state.userName} onChange = {this.handleChange}/>
                    <label for="passwordUser">
                        Password :
                    </label>
                    <br/>
                    <input name="passwordUser" type="password" value = {this.state.passwordUser} onChange = {this.handleChange}/>
                    <input type="submit" value="Submit" />
                </form>
                </div>
            </div>

        );
    }
}