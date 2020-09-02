import React from 'react';
import Dropdown from './Dropdown'

const BudgetInput = ({ descValue, budgetValue, onDescChange }) => {

    const handleInput = () => {

    }

    return (
        <>
            <input 
                type="text" 
                className="add__description" 
                placeholder="Add description" 
                value={descValue}
                onChange={onDescChange}
            />
            <input 
                type="number" 
                className="add__value" 
                placeholder="Value" 
                value={budgetValue}
                //onChange={}
            />
            <Dropdown />
            <button onClick={handleInput}>Enter</button>
        </>
    )
}

export default BudgetInput;