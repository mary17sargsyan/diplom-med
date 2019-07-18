import React, {Component} from 'react';
import {TopHeader} from '../shared/top-header.component';
import './style.css';
import axios from 'axios';

export class Recommendations extends Component {

    constructor() {
        super();
        this.state = {
            products: []
        };
    }



    componentWillMount() {
        axios
            .get("/recommended.php")
            .then(({data}) => {

                this.setState({
                    products: data
                });
                console.log(this.state.products);
            });
    }


    render() {


            return (

                <div>
                    <TopHeader/>

                    <div className="grayBack">
                        <h3> WEEKLY RECOMMENDATIONS </h3>
                        <br/>
                        <div className="products">
                            <p> Your Daily caloria <b>{this.state.products.result} </b></p>
                            <br/>
                            <ul>
                                <li>{this.state.products.a}</li>
                                <li>{this.state.products.b}</li>
                                <li>{this.state.products.c}</li>
                                <li>{this.state.products.d}</li>
                                <li>{this.state.products.aa}</li>
                                <li>{this.state.products.bb}</li>
                                <li>{this.state.products.cc}</li>
                                <li>{this.state.products.dd}</li>
                                <li>{this.state.products.mm}</li>
                            </ul>

                        </div>


                    </div>

                </div>
            );

        }
}

