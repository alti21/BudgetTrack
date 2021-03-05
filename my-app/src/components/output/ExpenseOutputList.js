import React from 'react';
import ExpenseOutput from './ExpenseOutput';

// list will be list of income objects
const ExpenseOutputList = ({ list, removeExpense }) => {

    return (
        <div className="expense__list">
            <div className="expense__list--title">EXPENSE</div>
            {list.map((item, index) => <ExpenseOutput 
                                key={index}
                                value={item.value} 
                                type={item.type} 
                                desc={item.description} 
                                handleButton={()=>removeExpense(index)}
                                />
            )}
        </div>
    )
}

export default ExpenseOutputList;