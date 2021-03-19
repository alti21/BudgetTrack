import React from 'react';
import Dropdown from './Dropdown'

const BudgetInput = ({ descValue, budgetValue, onDescChange, type, onSelectChange, onBudgetSubmit, onValChange }) => {

    return (
        <div className="add">
            <Dropdown 
                className="add__type"
                optionArr={['+','-']}
                onSelectChanges={onSelectChange}
                value={type}
            />
            <input 
                type="text" 
                className="add__description" 
                placeholder="Add description" 
                value={descValue}
                onChange={onDescChange} //handler fron App (Parent) component
            />
            <input 
                type="number" 
                className="add__value" 
                placeholder="Value" 
                value={budgetValue}
                onChange={onValChange}
            />
            <Dropdown
                className="add__category"
                optionArr={['Select Category','Salary','Business','Travel','Automobile','Food','Entertainment']}
            />
            <button onClick={onBudgetSubmit}>Enter</button>
        </div>
    )
}

export default BudgetInput;
