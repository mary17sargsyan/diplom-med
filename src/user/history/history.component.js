import React, { Component } from 'react';
import {TopHeader} from '../shared/top-header.component';
import axios from 'axios';
import './style.css';


export class History extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            sums: []
        };
    }
    componentWillMount() {
        axios
            .get("/history.php")
            .then(({ data }) => {
            console.log(data);
                this.setState({
                    products: data.products,
                    sums: data.sums
                });
            });
    }
    createTable(){
        let tables = [];
        let products = this.state.products;
        let sums = this.state.sums;
        Object.keys(products).forEach(function (key) {
            console.log(key);
            let tableRows = [];
            tableRows.push(<th>{key} - {sums[key]} cal.</th>) ;

            products[key].map((item, i) => {
                tableRows.push(<tr>{item.time} - {item.type} - {item.gr} cal.</tr>)
            });
            tables.push(<table>{tableRows}</table>);
        });

        return tables
    }
    render() {

        return (
            <div>

                <TopHeader/>
                <br/>
                <br/>  <br/>

        <div >
                    {this.createTable()}
                </div>
            </div>
        );
    }
}

const Product = ({date, time, type, gr, energy }) => (
    <div>
        <ul className="ul">

            <li> {date}</li>
            <li> {time}</li>
            <li> {type}</li>
            <li> {gr} </li>

        </ul>
        <br/>
    </div>

);

const DaySum = ({date, sum }) => (
    <div>
        Calories sum for {date} is {sum}
    </div>
);