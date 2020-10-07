import React from 'react';
import IncomeOutput from './IncomeOutput';


// list will be list of income objects
const IncomeOutputList = ({ list, removeIncome }) => {

    const handler = (i) => {
        return () => {
            console.log(JSON.parse(localStorage.getItem("income")));
            let arr = JSON.parse(localStorage.getItem("income"));
            arr.splice(i, 1);
            arr = JSON.stringify(arr);
            localStorage.setItem("income", arr);
        };
    }

    return (
        <div className="income__list">
            <div className="income__list--title">INCOME</div>
            {list.map((item, index, arr) => <IncomeOutput 
                                id={item.id} 
                                value={item.incomeValue} 
                                type={item.budgetType} 
                                desc={item.desc} 
                               // handleButton={handler(index)} 
                                handleButton={()=>removeIncome(index)}
                                
                                />
            )}
        </div>
    )
}


export default IncomeOutputList;