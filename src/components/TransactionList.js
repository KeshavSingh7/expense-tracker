import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    
    return (
        <>
            <h4>HISTORY</h4>
            <ul id="passbook" className="list">
            {
                transactions.map(transaction => {
                    return (
                        <Transaction key={transaction.id} transaction={transaction} />
                    )
                })
            }
            </ul>   
        </>
    )
}
