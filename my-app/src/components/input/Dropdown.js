import React from 'react';

const Dropdown = ({className, optionArr, value, onSelectChanges}) => {
 //USE PROPS IN THIS COMPONENT, maybe user can add custom categories, pass array as props?

  //  let opt = sel.options[sel.selectedIndex];

   

    return (
        <>
            <select className={className} onChange={onSelectChanges} value={value}>
                {optionArr.map((el,i) => (<option key={i}>{el}</option>))}
            </select>
        </>
    )
}

export default Dropdown;


