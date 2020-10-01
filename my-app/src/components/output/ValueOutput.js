import React from 'react';
import Button from '../buttons/Button';

//move item__value element to left when hovering over it, and make delete button appear

const ValueOutput = ({type, value}) => {
    
    return (
        <>
            <div className="right clearfix">
                <div className="item__value">{type} {value}</div>
                <Button buttonType="item__delete--btn"/>
            </div>
        </>
    )
}

export default ValueOutput;