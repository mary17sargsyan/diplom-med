import React from 'react';
import { Link, Route } from "react-router-dom";


export class Brands extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brands: [
                {
                    name: 'EA',
                    path: '/ea'
                },{
                    name: 'Gucci',
                    path: '/gucci'
                }
            ]
        };
    }

    render() {
        const { match } = this.props;
        return (
            <div>

                <h1>Brand Page</h1>
                {
                    this.state.brands.map(brand => (
                        <div  key={brand.name} >
                            <Link to={`${match.url}${brand.path}`}>{brand.name}</Link>
                        </div>
                        
                    ))
                }
                <hr></hr>
                <Route path={`${match.path}/:brandName`} component={Brand} />

            </div>
            
        ); 
    }
}

function Brand(props) {
    return (
        <h1>This is {props.match.params.brandName} brand</h1>
    );
}