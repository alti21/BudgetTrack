import React from 'react';
import ExpenseOutput from './ExpenseOutput';


// list will be list of income objects
const ExpenseOutputList = ({ list, removeExpense }) => {

    // const handler = (i) => {
    //     return () => {
    //         console.log(JSON.parse(localStorage.getItem("income")));
    //         let arr = JSON.parse(localStorage.getItem("income"));
    //         arr.splice(i, 1);
    //         arr = JSON.stringify(arr);
    //         localStorage.setItem("income", arr);
    //     };
    // }

    return (
        <div className="expense__list">
            <div className="expense__list--title">EXPENSE</div>
            {list.map((item, index, arr) => <ExpenseOutput 
                                id={item.id} 
                                value={item.expenseValue} 
                                type={item.budgetType} 
                                desc={item.desc} 
                               // handleButton={handler(index)} 
                                handleButton={()=>removeExpense(index)}
                                />
            )}
        </div>
    )
}


export default ExpenseOutputList;