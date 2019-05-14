import React, { Component } from 'react';

import  {Menu} from "./menu/menu.component";

import './style.css';

export  class Home extends Component {
  render() {
    return (



            <div className="header">
                <p> EVERYDAY   <img src={'./img/logo.png'} alt="qay" /><b> HEALTH </b></p>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>




                <div>
                    <Menu/>
                </div>

            </div>



    );
  }
}


