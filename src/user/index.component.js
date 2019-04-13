import React, { Component } from 'react';
import { Header } from './header/header-component';
import {Menu} from './menu/menu.component';


export class Index extends Component {


    render() {
        return (
            <div>
                <Header/>
                <Menu/>
            </div>
        );
    }
}