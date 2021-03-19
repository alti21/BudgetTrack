import React from 'react';
import CurrentDate from './Date'

const Title = () => {


    return (
        <div className="budget__title">
            <h1>BudgetTrak</h1>
            <p>Available Budget for <CurrentDate /></p>
        </div>
    )
}

export default Title;