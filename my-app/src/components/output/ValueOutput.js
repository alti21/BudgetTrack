import React from 'react';
import DeleteButton from '../buttons/DeleteButton';



const ValueOutput = ({type, value}) => {
    
    return (
        <>
            <div className="right clearfix">
                <div className="item__value">{type} {value}</div>
                <DeleteButton />
            </div>
        </>
    )
}

export default ValueOutput;