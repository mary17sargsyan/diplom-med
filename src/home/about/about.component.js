import React from 'react';
import { TopHeader } from '../shared/top-header.component';
import './styleHome.css';


export class About extends React.Component {


    render() {
        return (
            <div>
                <TopHeader> </TopHeader>
                <div className="aboutAs">

                    <p>
                        "Today, more than 95% of all chronic disease is caused by food choice, <br/>
                        toxic food ingredients, nutritional deficiencies and lack of physical exercise."
<br/>
                            <p> Our vision is to help consumers live a vibrant, healthy, and natural life - and make it very very easy.
                                In a world full of marketing messages, confusing slogans,
                                and overwhelming choices, it is nearly impossible to know what you are putting in and on your bodies!
                            </p>


                    </p>





                </div>
            </div>
            
        ); 
    }
}