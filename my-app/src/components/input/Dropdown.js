import React from 'react';

const Dropdown = () => {
 //USE PROPS IN THIS COMPONENT, maybe user can add custom categories
    return (
        <>
            <select className="add_category">
                <option>Select Category</option>
                <option>Salary</option>
                <option>Business</option>
                <option>Travel</option>
                <option>Automobile</option>
                <option>Food</option>
                <option>Entertainment</option>
            </select>
        </>
    )
}

export default Dropdown;