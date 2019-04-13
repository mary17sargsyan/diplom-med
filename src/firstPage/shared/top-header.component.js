import React from 'react';
import { Link } from "react-router-dom";
import './style.css';
export class TopHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [{
                title: 'Home',
                url: '/'
            },{
                title:'Register',
                url: '/register'
            },{
                title:'Login',
                url: '/login'
            }, {
                    title:'Index',
                    url: '/user'
            }]


        }
    }
    render() {
        return (
            <nav>
                {
                    this.state.links.map((link, index) => {
                        return (
                            <Link key={index} to={link.url}>{link.title} &nbsp;</Link>
                        )
                    })
                }
            </nav>
        )
    }
}