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
const IncomeOutput = ({ desc, type,id, value }) => {
    //id = inc-{id}
        return (
            <>
                <div className="item clearfix" id={id}>
                    <div className="item__description">{desc}</div>
                        <ValueOutput
                            type={type}
                            value={value}
                        />
                </div>
            </>
        )
    }

export default IncomeOutput;



