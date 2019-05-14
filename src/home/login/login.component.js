import React, {Component} from 'react';
import {TopHeader} from '../shared/top-header.component';
import axios from 'axios';
import './loginStyle.css';
import {Index} from "../../user/index.component";

export class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            station: 'empty'

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
        event.preventDefault();

        let formData = new FormData();
        formData.append('userName', this.state.userName);
        formData.append('password', this.state.password);

        axios({
            method: 'post',
            url: '/login.php',
            data: formData,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        })
            .then((response) =>{

                if (response.data.result === 'ok') {

                    this.setState({ station:'ok'});

                }
                else {
                    this.setState({ station:'notOk'});


                }

            })


    }


    render() {
        if (this.state.station === 'empty' ) {
            return (

                <div>
                    <TopHeader/>
                    <br/>
                    <br/>
                    <br/>

                    <div className="log">
                        <form action="/login.php" onSubmit={this.handleSubmit}>
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

        } else if(this.state.station==='ok'){
            return <Index/>;
        } else if (this.state.station==='notOk') {
            return (

                <div>
                    <TopHeader/>
                    <br/>
                    <br/>
                    <Welcome name="No user found, Please regitre"/>
                    <br/>

                    <div className="log">
                        <form action="/login.php" onSubmit={this.handleSubmit}>
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

}

function Welcome(props) {
    return <p>Hello, {props.name}</p>;
}