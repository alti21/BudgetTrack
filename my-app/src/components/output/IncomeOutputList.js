import React from 'react';
import IncomeOutput from './IncomeOutput';


// list will be list of income objects
const IncomeOutputList = ({ list }) => {
    return (
        <div>utfudtut
            {list.map(item => <IncomeOutput id={item.id} value={item.incomeValue} type={item.budgetType} desc={item.desc}  />)}
        </div>
    )
}


export default IncomeOutputList;