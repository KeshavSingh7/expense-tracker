import React from 'react'

export const TransactionList = () => {
    return (
        <>
            <h4>HISTORY</h4>
            <ul id="passbook" className="list">
                <li className="minus">
                    Cash <span>-Rs. 400.00</span><button className="delete-btn">X</button>
                </li>
                <li className="plus">
                    Cash <span>+Rs. 400.00</span><button className="delete-btn">X</button>
                </li>
            </ul>   
        </>
    )
}
