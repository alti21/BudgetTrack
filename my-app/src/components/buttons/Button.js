import React from 'react';
import { BsFillXOctagonFill } from "react-icons/bs";
const Button = ({buttonType, handler}) => (
    <>
        <div className="item__delete">
            <button className={buttonType} onClick={handler}>
                <i><BsFillXOctagonFill /></i>
            </button>
        </div>
    </>
)

export default Button;