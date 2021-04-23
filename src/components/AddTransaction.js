import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);
    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id : Math.floor(Math.random() * 1000000),
            text,
            amount : +amount
        }
        addTransaction(newTransaction);
    };

    return (
        <>
            <h4>ADD NEW TRANSACTION</h4>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} id="text" placeholder="Enter Text ....."  />
                </div>
                <div className="from-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense | positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmmount(e.target.value)} />
                </div>
                <div>
                    <button className="btn">Add Transaction</button>
                </div>
            </form>
        </>
    )
}
