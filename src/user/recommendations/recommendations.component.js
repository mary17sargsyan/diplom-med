import React, {Component} from 'react';
import {TopHeader} from '../shared/top-header.component';

export class Recommendations extends Component {

        render()
        {

            const meals = [
                {meal: 'Breacfast', kcal: '203 - 310'},
                {meal: 'Lunch', kcal: '303 - 440'},
                {meal: 'Snack', kcal: '0 - 270'},
                {meal: 'Dinner', kcal: '423 - 570'}

            ];

            const reacom = ["1. Don't skip breakfast", " 2. Eat regular meals", "3. Eat plenty of fruit and veg",
                "4. Get more active", "5. Drink plenty of water"]

            const arrMeals = meals.map((meal, index) => (

                <div className="reacommended">
                    <h1>{meal.meal}</h1>
                    <p> {meal.kcal} </p>
                </div>



            ));
            const rec = reacom.map((rec, index) => (

                <div className="helpful">

                    <p> {rec} </p>
                </div>


            ));

            return (

                <div>
                    <TopHeader/>
                    <br/>

                    <div className="grayBack">
                        <h3> WEEKLY RECOMMENDATIONS </h3>
                        <br/>

                        <div className="all">
                            {arrMeals}
                        </div> <br/>
                        <div>
                            {rec}
                        </div>

                    </div>

                </div>

            );
        }
    }