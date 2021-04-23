import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
    const className = sign === '-' ? 'minus' : 'plus';

    return (
        <li className={className} key={transaction.id}>
            {transaction.text} <span>{sign}Rs. {Math.abs(transaction.amount).toFixed(2)}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)} >X</button>
        </li>
    )
}
