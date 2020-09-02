import React from 'react';
import ValueOutput from './ValueOutput';




//Det=leteButton appears after hovering over income value
const IncomeOutput = ({description}) => {

    return (
        <>
            <div className="item clearfix" id="inc-%id%">
            <div className="item__description">{description}</div>
                <ValueOutput 
                    type={'inc'}
                    //value={}
                />
            </div>
        </>
    )
}

export default IncomeOutput;



