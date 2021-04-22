import React from 'react'

export const IncomeExpenses = () => {
    return (
        <div className="inc-exp-container">
            <div>
                <h4>INCOME</h4>
                <p id="credit" className="money-plus">+Rs. 0.00</p>
            </div>
            <div>
                <h4>EXPENSES</h4>
                <p id="debit" className="money-minus">-Rs. 0.00</p>
            </div>
        </div>
    )
}
