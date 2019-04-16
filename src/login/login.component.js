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

        console.log(this.state)

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

///////register





/////////////////////////////////////////
handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
}

handleSubmit(event) {
    /*   petqe gna Json Zapros */
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
}

render() {
    const genderArray = ['---','Male', 'Female'];
    let gender = genderArray.map((item) =>
        <option value={item}>{item}</option>
    )
    const aboutArray = ['---','I want you lose my weight', 'Female'];
    let about = aboutArray.map((item) =>
        <option value={item}>{item}</option>
    )
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
                               onChange={this.handleChange}/>
                        <label for="lastName">
                            Last Name :
                        </label>
                        <br/>
                        <input name="lastName" type="text" value={this.state.lastName}
                               onChange={this.handleChange}/>
                        <label for="eMail">
                            E: mail :
                        </label>
                        <br/>
                        <input name="eMail" type="text" value={this.state.eMail} onChange={this.handleChange}/>

                        <label for="passwordUser">
                            Password :
                        </label>
                        <br/>
                        <input name="passwordUser" type="password" value={this.state.passwordUser}
                               onChange={this.handleChange}/>
                        <label for="passwordRepeat">
                            Please Repeat Password :
                        </label>
                        <br/>
                        <input name="passwordRepeat" type="password" value={this.state.passwordRepeat}
                               onChange={this.handleChange}/>

                    </div>
                    <div className="formDiv2">
                        <label for="age">
                            Date of Birth :
                        </label>
                        <br/>
                        <input name="date" type="date" max="1930-01-01" min="2010-01-01" value={this.state.date}
                               onChange={this.handleChange}/>
                        <label for="selectGender">
                            Gender :
                        </label>
                        <select name="selectGender" value={this.state.selectGender} onChange={this.handleChange}>
                            {gender}
                        </select>
                        <label for="weightHeight">
                            Your weight and height :
                        </label>
                        <div className="wightHeight">

                            <input name="weight" type="number" placeholder="Height" value={this.state.weight}
                                   onChange={this.handleChange}/>
                            <input name="height" type="number" placeholder="Weight"  value={this.state.height}
                                   onChange={this.handleChange}/>
                        </div>
                        <label for="about">
                            What do you want ? :
                        </label>
                        <select name="about" value={this.state.about} onChange={this.handleChange}>
                            {about}
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
