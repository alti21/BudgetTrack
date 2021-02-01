import React from 'react';
import ValueOutput from './ValueOutput';




//Det=leteButton appears after hovering over income value
// const IncomeOutput = ({ obj }) => {
// //id = inc-{id}
//     return (
//         <>
//             <div className="item clearfix" id={obj.id}>
//                 <div className="item__description">{obj.description}</div>
//                     <ValueOutput
//                         type={obj.type}
//                         //value={}
//                     />
//             </div>
//         </>
//     )
// }
const ExpenseOutput = ({ desc, type,id, value, handleButton }) => {
    //id = inc-{id}
        return (
            <>
                <div className="item clearfix expense" id={id}>
                    <div className="item__description">{desc}</div>
                        <ValueOutput
                            type={type}
                            value={value}
                            handleClick={handleButton}
                        />
                </div>
            </>
        )
    }

export default ExpenseOutput;