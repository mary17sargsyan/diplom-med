import React from 'react';
import { Link } from "react-router-dom";
import './style.css';
export class TopHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {
                title: 'Food',
                url: '/food'
            },{
                title:'Workout',
                url: '/workout'
            },{
                title:'Recommendations',
                url: '/recommendations'
            }, {
                    title:'History',
                    url: '/history'
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