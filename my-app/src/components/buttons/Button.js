import React from 'react';

const Button = ({buttonType}) => (
    <>
        <div className="item__delete">
            <button className={buttonType}>
                <i className="ion-ios-close-outline"></i>
            </button>
        </div>
    </>
)

export default Button;