import React, { Component } from 'react';
import './style.css';
export class Header extends Component {


    render() {
        return (
            <div>
                <div className="header">
                    <p> EVERYDAY   <img src={'./img/logo.png'} alt="qay" /><b> HEALTH </b></p>
                </div>

            </div>
        );
    }
}