import React from 'react';

const Button = ({buttonType, handler}) => (
    <>
        <div className="item__delete">
            <button className={buttonType} onClick={handler}>
                <i className="ion-ios-close-outline"></i>
            </button>
        </div>
    </>
)

export default Button;