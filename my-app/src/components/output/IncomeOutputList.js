import React from 'react';
import IncomeOutput from './IncomeOutput';

// list will be list of income objects
const IncomeOutputList = ({ list, removeIncome }) => {

    return (
        <div className="income__list">
            <div className="income__list--title">INCOME</div>
            {list.map((item, index) => <IncomeOutput 
                                key={index} 
                                value={item.value} 
                                type={item.type} 
                                desc={item.description}  
                                handleButton={()=>removeIncome(index)}
                                />
            )}
        </div>
    )
}

export default IncomeOutputList;