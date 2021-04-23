import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    let balance = 0;
    transactions.forEach(transaction => {
        balance += parseInt(transaction.amount.toFixed(2));
    })

    return (
        <>
            <h3>YOUR BALANCE - <span id="balance">Rs. {balance}</span></h3>
        </>
    )
}
