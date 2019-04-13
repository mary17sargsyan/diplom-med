import React from 'react';
import { TopHeader } from '../shared/top-header.component';
import './styleHome.css';


export class Home extends React.Component {


    render() {
        return (
            <div>
                <TopHeader> </TopHeader>
                <div className="aboutAs">
                    <p>
                        "Today, more than 95% of all chronic disease is caused by food choice, <br/>
                        toxic food ingredients, nutritional deficiencies and lack of physical exercise."
                    </p>



                </div>
            </div>
            
        ); 
    }
}