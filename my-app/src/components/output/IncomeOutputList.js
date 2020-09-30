import React from 'react';
import IncomeOutput from './IncomeOutput';


// list will be list of income objects
const IncomeOutputList = ({ list }) => {
    return (
        <div className="income__list">
            <div className="income__list--title">INCOME</div>
            {list.map(item => <IncomeOutput id={item.id} value={item.incomeValue} type={item.budgetType} desc={item.desc}  />)}
        </div>
    )
}


export default IncomeOutputList;