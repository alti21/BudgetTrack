import React from 'react';
import Button from '../buttons/Button';



const ValueOutput = ({type, value}) => {
    
    return (
        <>
            <div className="right clearfix">
                <div className="item__value">{type} {value}</div>
                <Button />
            </div>
        </>
    )
}

export default ValueOutput;