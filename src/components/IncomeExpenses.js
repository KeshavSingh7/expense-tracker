import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    let income = 0, expenses = 0;
    transactions.forEach((transaction) => {
        const amount = parseInt(transaction.amount.toFixed(2));
        if(amount > 0)
            income += amount;
        else
            expenses += amount; 
    }); 

    return (
        <div className="inc-exp-container">
            <div>
                <h4>INCOME</h4>
                <p id="credit" className="money-plus">+Rs. {income}</p>
            </div>
            <div>
                <h4>EXPENSES</h4>
                <p id="debit" className="money-minus">-Rs. {Math.abs(expenses)}</p>
            </div>
        </div>
    )
}
