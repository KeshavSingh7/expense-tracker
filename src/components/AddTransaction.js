import React, { useState } from 'react'

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmmount] = useState(0);
    return (
        <>
            <h4>ADD NEW TRANSACTION</h4>
            <form>
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
