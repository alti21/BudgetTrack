import React from 'react';
import ValueOutput from './ValueOutput';

const IncomeOutput = ({ desc, type,id, value, handleButton }) => {
    //id = inc-{id}
        return (
            <>
                <div className="item clearfix income" id={id}>
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

export default IncomeOutput;



